import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Fetch() {
    const [data,setData]=useState()
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://dummyjson.com/products/category-list'); 
        setData(response.data)
        console.log(response.data)
        response.data.map((imageURL, index) => {
         return console.log(`Message ${index} (Image URL):`, imageURL);
        });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return(
    <div>
        <p>{data}</p>
    </div>
  )
}
