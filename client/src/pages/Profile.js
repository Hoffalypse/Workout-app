import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_EXE } from "../utils/queries";
import SearchCard from "../components/SearchCard";
import Navbar from "../components/Navbar";
import { capitalize } from '../utils/helper';

const Profile = () => {
  const { data } = useQuery(QUERY_EXE);
  const [allExercises, setAllExercises] = useState([]);
  const [back, setBack] = useState([]);

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
    const filterBackExercises = async () => {
      if (allExercises) {
        const backEx = await allExercises.filter(
          (ex) => ex.bodyPart === "back"
        );
        setBack(backEx);
      
      }
    };

    filterBackExercises();
  }, [allExercises]);

  console.log(back);

  return (
    <div>
      <Navbar/>
      {back ? (
        <div>
          <h1>Back</h1>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {back.map((ex) => (
              <div
                style={{
                  // maxWidth: "340px",
                  textAlign: "center",
                  border: "4px solid black",
                  margin: "5px",
                  borderRadius: "10px",
                }}
              >
                <img src={ex.gifUrl} />
                <div
                  style={{
                    backgroundImage: "linear-gradient(yellow, red)",
                    height: "24vh",
                  }}
                >
                  <p style={{ fontWeight: "bold", maxWidth: "350px" }}>
                    {capitalize(ex.name)}
                  </p>
                  <p>Target: {capitalize(ex.target)}</p>
                  <p style={{ marginTop: "-20px" }}>
                    Equipment: {capitalize(ex.equipment)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Profile;
