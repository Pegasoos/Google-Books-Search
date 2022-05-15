import React, { useState, useEffect } from 'react'
import './Saved.css'
import Book from './Book'
import { ReadOutlined } from '@ant-design/icons'

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
        console.log(sortedBooks)
        setDatabaseState({books:sortedBooks})
        //put sortedBooks into state with hook
     }
     //add List after database call is sorted out
    return(
    <div className = "saved-div">
        <h1>Saved</h1>
        {
            databaseState.books.length < 1 ? <ReadOutlined/>:databaseState.books.map((book) => (
                <Book 
                      id ={book._id}
                      key = {book._id}
                      title = {book.title} 
                      authors = {book.authors} 
                      imgSrc = {book.imgSrc}
                      description = {book.description}
                      link = {book.link}
                />
            ))
        }
    </div>
    )
}

export default Saved;