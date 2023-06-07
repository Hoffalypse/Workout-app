const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/exercises/:selectedItem', async (req, res) => {
    const { selectedItem } = req.params;
  console.log('hello', process.env.RAPIDAPI_API_KEY)
  console.log(selectedItem)
    try {

      const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedItem}`,
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_API_KEY,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      };
  
      const response = await axios.request(options);
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  module.exports = router