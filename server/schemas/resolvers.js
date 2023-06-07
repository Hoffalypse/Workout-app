const { User } = require("../models");
const { Exercise } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const resolvers={
    Query:{
      getEXE:async(parent,{bodyName})=>{
   
  const options = {
    method: "GET", 
      mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin",
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/back`,
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  try {
    const getexcersise=await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyName}`,{
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    })  
    const data=await getexcersise.json()
 

    return data
  
  } catch (error) {
    console.log(error )
  }

      },
        me: async (parent, args, context) => {
     
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select("-__v -password")
               
              return userData;
            }
            throw new AuthenticationError("Not logged in");
          },
          users: async () => {
            return User.find().select("-__v -password")
          },
          user: async (parent, { username }) => {
            return User.findOne({ username })
              .select("-__v -password")
              
          },
          getUser:async(parent, args, context)=>{
            console.log(context.user)
            if(context.user){
              const userData=  await User.findOne({ _id:context.user._id })
              .select("-__v -password")
         
              return userData
            }
            throw new AuthenticationError("somthing wrong");
          }
    },
    Mutation:{
        login:async(parent,{email,password})=>{
            const user=await User.findOne({email})
           
            if(!user){
                throw new AuthenticationError("no user")
            }
            const correctPwd=await user.isCorrectPassword(password)
            if(!correctPwd){
                
                throw new AuthenticationError("incorrect password")
            }
            const token=signToken(user)
            return {token,user}
            },
        addUser:async(parent,args)=>{ 
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        saveExercise: async (parent, { ExerciseInput }, context) => {
          //console.dir(context.user);
         // console.log(ExerciseInput);
          if (context.user) {
          
        
            const updateUser = await User.findByIdAndUpdate(
              { _id: context.user._id },
              { $push: { savedExercise: ExerciseInput } },
              { new: true }
            );
            return updateUser;
          }
          throw new AuthenticationError("You need to be logged in!");
        },
        }
    }
module.exports=resolvers