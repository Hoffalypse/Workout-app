import React, {useState, useEffect} from 'react'

import axios from 'axios';
const options = {
method: 'GET',
url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
headers: {
    'X-RapidAPI-Key': '6a7d25eaecmshee44f344abc6669p1ffe03jsnf5b51c7e8f40',
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
