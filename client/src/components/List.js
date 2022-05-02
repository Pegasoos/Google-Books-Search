import React from 'react';
import Book from './Book';
import './List.css';

//HEADER PROP PASSED AS "SAVED" FOR SAVED BOOKS RENDERING OR "RESULTS" FOR SEARCH RENDERING
function List(props){

    const displayResult = props.displayResult;

    if(displayResult){
    return(
    <article className = 'list-container'>
        <h1>{props.header}</h1>
        {props.map(results => (
            <Book title = {props.title} 
                  authors = {props.authors} 
                  imgSrc = {props.imgSrc}
                  description = {props.description}
            />
        ))}
    </article>
        )
    }
}

export default List