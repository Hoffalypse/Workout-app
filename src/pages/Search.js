import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import axios from 'axios'; // Import Axios
import logo from "../assets/wwlogo.png";
import SearchCard from "../components/SearchCard";
import Navbar from "../components/Navbar";

const Search = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [exerciseName, setExerciseName] = useState(null);
  const [allExercises, setAllExercises] = useState([]);

  const fetchData = async (selectedBodyPart) => {
    try {
      const response = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}`, {
        params: { limit: '10' },
        headers: {
          'X-RapidAPI-Key': '2ab020db8cmsh21324bfdaa7b502p1595a2jsnbe0be0637a64',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      });
      setAllExercises(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleItemClick = (item, name) => {
    setSelectedItem(item);
    setExerciseName(name);
    fetchData(item); // Call fetchData with selected body part
  };

  useEffect(() => {
    if (selectedItem) {
      fetchData(selectedItem); // Fetch data initially if a body part is already selected
    }
  }, [selectedItem]);

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
