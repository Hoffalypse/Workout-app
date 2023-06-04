import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import logo from '../assets/wwlogo.png';
import SearchCard from '../components/SearchCard';
import Navbar from '../components/Navbar';


const Search = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [exerciseName, setExerciseName] = useState(null);
  const [allExercises, setAllExercises] = useState([]);

  const handleItemClick = (item, name) => {
    setSelectedItem(item);
    setExerciseName(name);
  };
  useEffect(() => {
    const getexcersise = async () => {
      try {
        const res = await axios.request(options);
        // console.log(res.data)
        setAllExercises(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    if (selectedItem) {
      getexcersise()
    }
  }
    , [selectedItem])
  const options = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedItem}`,
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


  return (
    <div >
     <Navbar currentPage={"search"}/>
      <br /><br />
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '24px' }}>Body section to work on:</p>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {exerciseName ? exerciseName : 'Select'}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleItemClick('back', 'Back')}>Back</Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemClick('cardio', 'Cardio')}>Cardio</Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemClick('chest', 'Chest')}>Chest</Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemClick('lower%20arms', 'Lower Arms')}>Lower Arms</Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemClick('lower%20legs', 'Lower Legs')}>Lower Legs</Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemClick('neck', 'Neck')}>Neck</Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemClick('shoulders', 'Shoulders')}>Shoulders</Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemClick('upper%20arms', 'Upper Arms')}>Upper Arms</Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemClick('upper%20legs', 'Upper Legs')}>Upper Legs</Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemClick('waist', 'Waist')}>Waist</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <br />
      {!selectedItem ? (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
        <img style={{ width: '300px'}} src={logo} alt='logo'/>
        <h1 style={{ fontSize: '90px', fontStyle: 'italic', marginTop: '125px'}}>Workout Wizard</h1>
        </div>
      ): ''}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {allExercises.map((exercise) => (
          <SearchCard exercise={exercise} key={exercise.id} />


        ))}
      </div>
    </div>

  )
}
export default Search
