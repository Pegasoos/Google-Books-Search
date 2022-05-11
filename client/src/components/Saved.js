import React, { Component, useState, useEffect } from 'react'
import './Saved.css'
import List from './List'

function Saved(props){
     const [databaseState, setDatabaseState] = useState({
        books:[] 
     })

     useEffect(() =>{
        getBooks();
     }, []);

     const getBooks = async () =>{
        const savedBooks = await fetch('/api/books', {
                method:'GET',
                headers:{"Content-type":"application/json;charset=UTF-8"}
            });
        const sortedBooks = await savedBooks.json()
        setDatabaseState({books:sortedBooks})
        //put sortedBooks into state with hook
     }
     //add List after database call is sorted out
    return(
    <div className = "saved-div">
        <h1>{props.header}</h1>
        
    </div>
    )
}

export default Saved;