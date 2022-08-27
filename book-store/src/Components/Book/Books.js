import React from 'react'
import axios from 'axios';
import {useState,useEffect} from 'react';
import Book from './Book'
const URL="http:localhost:5000/books";
const fetchHandler=async()=>{
    await axios.get(URL).then((res)=>res.data);
}

const Books=()=> {
    const[books,setBooks]=useState();
    useEffect(() => {
      fetchHandler().then(data=>setBooks(data))
    },[]);
    console.log(books);
  return (
    <div>
        <ul>
            {books && books.map((book,i)=>{
                <div key={i}>
                    <Book/>
                </div>
            })}
        </ul>
    </div>
  )
}

export default Books