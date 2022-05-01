import React from 'react';
import { Input } from 'antd';
import './Searchbar.css';
const { Search } = Input;

const apiKey = 'AIzaSyBDhCTo7MiQy0IutlvFi3BE6mHqJ3rbuVE';

function Searchbar(){

   const bookSearch = (query) =>{
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}+intitle`)
        .then( response => console.log(response.json()))
   }

    return(
        <div className='search-div'>
            <Search className = "search-bar" placeholder = "Search For A Book!" onSearch={bookSearch}/>
        </div>
    )
}
export default Searchbar;