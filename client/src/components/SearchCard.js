import React from 'react'
import { Button } from 'react-bootstrap';

const SearchCard = ({exercise}) => {
    const handleSaveClick = () => {
        console.log(exercise)
        //add this data to database from here
    }
  return (
    <div style={{  textAlign: 'center', border: '4px solid black', margin:'5px', borderRadius: '10px'}}>
      <img src={exercise.gifUrl}/>
      <div style={{backgroundImage: 'linear-gradient(yellow, red)', height: '24vh'}}>
      <p style={{fontWeight: 'bold', maxWidth: '350px'}}>{exercise.name}</p>
      <p>Target: {exercise.target}</p>
      <p style={{marginTop:'-20px', }}>Equipment: {exercise.equipment}</p>
      <Button variant="success" onClick={handleSaveClick}>Save</Button>{' '}
      </div>
      </div>
  )
}

export default SearchCard
