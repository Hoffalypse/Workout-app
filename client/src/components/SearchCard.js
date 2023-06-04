import React from 'react'
import {Button} from 'react-bootstrap';
import {SAVE_EXERCISE} from '../utils/mutations';
import Auth from '../utils/auth';
import {useMutation} from '@apollo/client';
const SearchCard = ({exercise}) => {
    const [saveExercise, {
            error
        }
    ] = useMutation(SAVE_EXERCISE);
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
        } catch (error) {
            console.error(error);
        }
        // add this data to database from here
    }
    return (<div style={
        {
            textAlign: 'center',
            border: '4px solid black',
            margin: '5px',
            borderRadius: '10px'
        }
    }>
        <img src={
            exercise.gifUrl
        }/>
        <div style={
            {
                backgroundImage: 'linear-gradient(yellow, red)',
                height: '24vh'
            }
        }>
            <p style={
                {
                    fontWeight: 'bold',
                    maxWidth: '350px'
                }
            }> {
                exercise.name
            }</p>
            <p>Target: {
                exercise.target
            }</p>
            <p style={
                {marginTop: '-20px'}
            }>Equipment: {
                exercise.equipment
            }</p>
            <Button variant="success"
                onClick={handleSaveClick}>Save</Button>
            {' '} </div>
    </div>)
}

export default SearchCard
