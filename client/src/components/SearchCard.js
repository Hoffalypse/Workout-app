import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { capitalize } from '../utils/helper';
import {SAVE_EXERCISE  } from '../utils/mutations';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';

const SearchCard = ({exercise}) => {
    const [saveExercise, {
            error
        }
    ] = useMutation(SAVE_EXERCISE);

    const [buttonText, setButtonText] = useState('Save');
    const [buttonColor, setButtonColor] = useState('success');
    const [buttonDisable, setButtonDisable] = useState(false);
    const handleSaveClick = async () => {
        let {
            bodyPart, equipment,gifUrl,name, target
        } = exercise
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (! token) {
            return false
        }
        try {
            console.log(token)
            await saveExercise({
                variables: {
                    ExerciseInput: {
                        bodyPart,equipment,gifUrl,name,target
                    }
                }
            })
            setButtonText('Saved!');
            setButtonColor('info');
            setButtonDisable(true);
        } catch (error) {
            console.error(error);
        }
        // add this data to database from here
    }
  return (
    <div style={{  textAlign: 'center', border: '4px solid black', margin:'5px', borderRadius: '10px'}}>
      <img src={exercise.gifUrl}/>
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
