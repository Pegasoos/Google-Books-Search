import React from 'react';
import Book from './Book';
import './List.css';

//HEADER PROP PASSED AS "SAVED" FOR SAVED BOOKS RENDERING OR "RESULTS" FOR SEARCH RENDERING
function List(props){
    <article className = 'list-container'>
        <h1>{props.header}</h1>
        {props.map(results => (
            <Book title = {results.volumeInfo.title} 
                  authors = {results.volumeInfo.authors[0]} 
                  imgSrc = {results.volumeInfo.imageLinks.medium}
                  description = {results.volumeInfo.description}
            />
        ))}
    </article>
}

export default List