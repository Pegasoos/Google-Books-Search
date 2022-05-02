import React, { Component } from 'react';
import './Searchbar.css';
import List from './List';
import { Input } from 'antd';
import API from '../utils/API';
const { Search } = Input;

class Searchbar extends Component{

    state = {
        displayResult:false
    }

    bookSearch = async (query) =>{
        try{
        const firstCall = await API.search(query)
        const sortedCall = await firstCall.json();
        console.log(sortedCall)
    }
        catch(err){
            console.log(err)
        }
        //.then((response) => this.displayResults(response));
   }
    displayResults = (response) => response.map((book) => {
        this.setState({displayResult: true,
    title: book.results.volumeInfo.title,
    authors: book.results.volumeInfo.authors[0],
    imgSrc: book.results.volumeInfo.imageLinks.medium,
    description: book.results.volumeInfo.description
    })
})

render(){
    return(
        <div className='search-div'>
            <Search className = "search-bar" placeholder = "Search For A Book!" onSearch={this.bookSearch}/>
            <List displayResult = {this.state.displayResult}
            title = {this.state.title}
            authors = {this.state.authors}
            imgSrc = {this.state.imgSrc}
            descripton = {this.state.description}
            />
        </div>
    )
}
}
export default Searchbar;