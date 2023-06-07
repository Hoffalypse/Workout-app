const { gql } = require("apollo-server-express");

const typeDefs = gql`
 
 
  type User {
    _id: ID
    username: String
    email: String
    savedExercise:[Exercise]
  
  } 
   type Exercise {
   
    _id:ID
    bodyPart:String
    equipment:String
    gifUrl:String
    name:String
    target:String
  }
  type Query {
    getUser:User
    me: User
    users: [User]
    user(username: String!): User
    getEXE(bodyName:String):[Exercise]
  }
  input ExerciseInput {
    bodyPart: String
    equipment: String
    gifUrl: String!
    name: String
    target: String
  
  }

 type Mutation {
    login(email:String!, password:String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveExercise(ExerciseInput: ExerciseInput): User
 
}
  type Auth {
    token: ID!
    user: User
  }
`;
module.exports=typeDefs