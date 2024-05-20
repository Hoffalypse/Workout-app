import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { capitalize } from '../utils/helper';

const SearchCard = ({exercise}) => {


    const [buttonText, setButtonText] = useState('Save');
    const [buttonColor, setButtonColor] = useState('success');
    const [buttonDisable, setButtonDisable] = useState(false);
    const handleSaveClick = async () => {
      console.log("this could save something ")
    }
    console.log(exercise)
  return (
    <div style={{  textAlign: 'center', border: '4px solid black', margin:'5px', borderRadius: '10px'}}>
      <img src={exercise.gifUrl} alt='Still the man'/>
      <div style={{backgroundImage: 'linear-gradient(yellow, red)', height: '24vh'}}>
      <p style={{fontWeight: 'bold', maxWidth: '350px'}}>{capitalize (exercise.name)}</p>
      <p>Target: {capitalize (exercise.target)}</p>
      <p style={{marginTop:'-20px', }}>Equipment: {capitalize (exercise.equipment)}</p>
      <Button disabled={buttonDisable} variant={buttonColor} onClick={handleSaveClick}>{buttonText}</Button>{' '}
      </div>
      </div>
  )
}

export default SearchCard
