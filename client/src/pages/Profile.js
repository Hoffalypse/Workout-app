import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_EXE } from "../utils/queries";
import SearchCard from "../components/SearchCard";
import Navbar from "../components/Navbar";
import { capitalize } from "../utils/helper";
import ProfileCard from "../components/ProfileCard";

const Profile = () => {
  const { data } = useQuery(QUERY_EXE);
  const [allExercises, setAllExercises] = useState([]);
  const [back, setBack] = useState([]);
  const [neck, setNeck] = useState([]);
  const [chest, setChest] = useState([]);
  const [shoulders, setShoulders] = useState([]);
  const [upperArms, setUpperArms] = useState([]);
  const [lowerArms, setLowerArms] = useState([]);
  const [waist, setWaist] = useState([]);
  const [upperLegs, setUpperLegs] = useState([]);
  const [lowerLegs, setLowerLegs] = useState([]);
  const [cardio, setCardio] = useState([]);
  

  useEffect(() => {
    const all = async () => {
      if (data) {
        const dataHere = await data?.getUser?.savedExercise;

        setAllExercises(dataHere);
      }
    };

    all();
  }, [data]);

  useEffect(() => {
    const filterAllExercises = async () => {
      if (allExercises) {
        const backEx = await allExercises.filter(
          (ex) => ex.bodyPart === "back"
        );
        const neckEx = await allExercises.filter(
          (ex) => ex.bodyPart === "neck"
        );
        const chestEx = await allExercises.filter(
          (ex) => ex.bodyPart === "chest"
        );
        const shouldersEx = await allExercises.filter(
          (ex) => ex.bodyPart === "shoulders"
        );
        const upperArmsEx = await allExercises.filter(
          (ex) => ex.bodyPart === "upper arms"
        );
        const lowerArmsEx = await allExercises.filter(
          (ex) => ex.bodyPart === "lower arms"
        );
        
        const waistEx = await allExercises.filter(
          (ex) => ex.bodyPart === "waist"
        );
        const upperLegsEx = await allExercises.filter(
          (ex) => ex.bodyPart === "upper legs"
        );
        const lowerLegsEx = await allExercises.filter(
          (ex) => ex.bodyPart === "lower legs"
        );
        const cardioEx = await allExercises.filter(
          (ex) => ex.bodyPart === "cardio"
        );
        setBack(backEx);
        setNeck(neckEx);
        setChest(chestEx);
        setShoulders(shouldersEx)
        setUpperArms(upperArmsEx)
        setLowerArms(lowerArmsEx)
        setWaist(waistEx)
        setUpperLegs(upperLegsEx)
        setLowerLegs(lowerLegsEx)
        setCardio(cardioEx)
      }
    };

    filterAllExercises();

   
  }, [allExercises]);

  return (
    <div>
      <Navbar currentPage='Profile'/>
      {back.length !== 0 ? <ProfileCard exPart="Back" exerciseData={back} /> : ""}

      {neck.length !== 0 ? <ProfileCard exPart="Neck" exerciseData={neck} /> : ""}

      {chest.length !== 0 ? <ProfileCard exPart="Chest" exerciseData={chest} /> : ""}

      {shoulders.length !== 0 ? <ProfileCard exPart="Shoulders" exerciseData={shoulders} /> : ""}

      {upperArms.length !== 0 ? <ProfileCard exPart="Upper Arms" exerciseData={upperArms} /> : ""}

      {lowerArms.length !== 0 ? <ProfileCard exPart="Lower Arms" exerciseData={lowerArms} /> : ""}
      
      {waist.length !== 0 ? <ProfileCard exPart="Waist" exerciseData={waist} /> : ""}

      {upperLegs.length !== 0 ? <ProfileCard exPart="Upper Legs" exerciseData={upperLegs} /> : ""}

      {lowerLegs.length !== 0 ? <ProfileCard exPart="Lower Legs" exerciseData={lowerLegs} /> : ""}

      {cardio.length !== 0 ? <ProfileCard exPart="Cardio" exerciseData={cardio} /> : ""}


    </div>
  );
};

export default Profile;

