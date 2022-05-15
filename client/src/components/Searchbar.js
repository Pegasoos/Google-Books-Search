import React, { Component } from 'react';
import './Searchbar.css';
import List from './List';
import { Input, Row, Col } from 'antd';
import API from '../utils/API';

const { Search } = Input;

class Searchbar extends Component{

    state = {
        books:[],
        header: "Results"
    }

    bookSearch = async (query) => {
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
        <Row className='search-div'>
            <Col span = {16} offset={4}>
            <Search className = "search-bar" placeholder = "Search For A Book!" onSearch={this.bookSearch}/>
            {
                this.state.books.length > 0 &&
                <h1>Results</h1>
            }
            <List
            header = {this.state.header}
            books = {this.state.books}
            /> 
            </Col>
        </Row>
    )
}
}
export default Searchbar;