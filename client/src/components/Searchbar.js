import React, { Component } from 'react';
import './Searchbar.css';
import List from './List';
import { Input } from 'antd';
import API from '../utils/API';
const { Search } = Input;

class Searchbar extends Component{

    state = {
        books:[]
    }

    bookSearch = async (query) =>{
        try{
        const firstCall = await API.search(query)
        const sortedCall = await firstCall.json();
        console.log(sortedCall)
        this.setState({books:sortedCall.items})
        console.log(this.state)
    }
        catch(err){
            console.log(err)
        }
   };
render(){
    return(
        <div className='search-div'>
            <Search className = "search-bar" placeholder = "Search For A Book!" onSearch={this.bookSearch}/>
            <List
            books = {this.state.books}
            />
            
        </div>
    )
}
}
export default Searchbar;