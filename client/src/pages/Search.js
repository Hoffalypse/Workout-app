import React, {useState, useEffect} from 'react'

import axios from 'axios';
const options = {
method: 'GET',
url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
}}
const Search = () => {

useEffect(() => {
    const getexcersise = async () => {
        try {
            const res = await axios.request(options
              
            );
            console.log(res.data)
        } catch (err) {
            console.log(err);
        }
    };
getexcersise()
}
, [])
return (<div>
    Search
</div>)}
export default Search
