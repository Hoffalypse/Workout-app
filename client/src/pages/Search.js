import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Dropdown } from "react-bootstrap";
import logo from "../assets/wwlogo.png";
import SearchCard from "../components/SearchCard";
import Navbar from "../components/Navbar";
import { QUERY_GET_EXE } from "../utils/queries";
const Search = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [exerciseName, setExerciseName] = useState(null);
  const [allExercises, setAllExercises] = useState([]);
  const { data } = useQuery(QUERY_GET_EXE, {
    variables: { bodyName: selectedItem },
  });
  const handleItemClick = (item, name) => {
    setSelectedItem(item);
    setExerciseName(name);
  };

  useEffect(() => {
    const getexcersise = async () => {
      try {
        if (data) {
          let dataHere = await data?.getEXE;
          console.log(dataHere);
          setAllExercises(dataHere);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getexcersise();
  }, [data]);

  return (
    <div>
      <Navbar currentPage={"search"} />
      <br />
      <br />
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "24px" }}>Body section to work on:</p>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {exerciseName ? exerciseName : "Select"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleItemClick("back", "Back")}>
              Back
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemClick("neck", "Neck")}>
              Neck
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemClick("chest", "Chest")}>
              Chest
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleItemClick("shoulders", "Shoulders")}
            >
              Shoulders
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleItemClick("upper%20arms", "Upper Arms")}
            >
              Upper Arms
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleItemClick("lower%20arms", "Lower Arms")}
            >
              Lower Arms
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemClick("waist", "Waist")}>
              Waist
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleItemClick("upper%20legs", "Upper Legs")}
            >
              Upper Legs
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleItemClick("lower%20legs", "Lower Legs")}
            >
              Lower Legs
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemClick("cardio", "Cardio")}>
              Cardio
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <br />
      {!selectedItem ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img style={{ width: "300px" }} src={logo} alt="logo" />
          <h1
            style={{
              fontSize: "90px",
              fontStyle: "italic",
              marginTop: "125px",
            }}
          >
            Workout Wizard
          </h1>
        </div>
      ) : (
        ""
      )}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {allExercises?.map((exercise) => (
          <SearchCard exercise={exercise} key={exercise.id} />
        ))}
      </div>
    </div>
  );
};
export default Search;
