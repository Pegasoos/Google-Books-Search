import React from 'react';
import Book from './Book';
import './List.css';

//HEADER PROP PASSED AS "SAVED" FOR SAVED BOOKS RENDERING OR "RESULTS" FOR SEARCH RENDERING
function List(props){

    return(
    <article className = 'list-container'>
        <h1>Header</h1>
        {props.books.map( (book) => (
            <Book 
                  key = {book.etag}
                  title = {book.volumeInfo.title} 
                  authors = {book.volumeInfo.authors} 
                  imgSrc = {book.volumeInfo.imageLinks.thumbnail}
                  description = {book.volumeInfo.description}
                  link = {book.volumeInfo.infoLink}
            />
        ))}
    </article>
        )
}

export default List