import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Dropdown, Button } from 'react-bootstrap';
import logo from '../assets/wwlogo.png'



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
    if (selectedItem){
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
   <div style={{ backgroundImage: 'linear-gradient(yellow, red)', width: '100%', height: '100%'}} >

<div style={{ display: 'flex', margin: '0', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', width: '100%' }}>
      <img style= {{ width: '90px'}}src={ logo }/>
      <h2 style={{ marginTop: '30px', fontSize: '35px', fontStyle: 'italic', fontWeight: 'bolder'}}>Workout Wizard</h2>
      </div>
      <div className='nav-btn'>
      <a href='./profile' className='nav-btn-ind' >Profile</a>

      <a href='./' className='nav-btn-ind'>Logout</a>
      </div>
    </div>
    </div>
    
<br/><br/>
<div style={{textAlign: 'center'}}>
<p style={{fontSize: '24px'}}>Select body section to work on:</p>
<Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        { exerciseName ? exerciseName : 'Select an item'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleItemClick('back', 'Back')}>Back</Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick('cardio', 'Cardio')}>Cardio</Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick('chest', 'Chest')}>Chest</Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick('lower%20arms', 'Lower Arms' )}>Lower Arms</Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick('lower%20legs', 'Lower Legs')}>Lower Legs</Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick('neck', 'Neck')}>Neck</Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick('shoulders', 'Shoulders')}>Shoulders</Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick('upper%20arms', 'Upper Arms')}>Upper Arms</Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick('upper%20legs', 'Upper Legs')}>Upper Legs</Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick('waist', 'Waist')}>Waist</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> 
    </div>
    {/* { selectedItem ? '': <div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>} */}
    <br/>
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
    {allExercises.map((exercise, index) => (
      <div style={{  textAlign: 'center', border: '4px solid black', margin:'5px', borderRadius: '10px'}}>
      <img src={exercise.gifUrl}/>
      <div style={{backgroundImage: 'linear-gradient(yellow, red)', height: '24vh'}}>
      <p style={{fontWeight: 'bold', maxWidth: '350px'}}>{exercise.name}</p>
      <p>Target: {exercise.target}</p>
      <p style={{marginTop:'-20px', }}>Equipment: {exercise.equipment}</p>
      <Button variant="success">Save</Button>{' '}
      </div>
      </div>
    ))}
    </div>
</div>

)}
export default Search
