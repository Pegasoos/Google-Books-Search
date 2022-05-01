import React from 'react';
import { Input } from 'antd';
import './Searchbar.css';
const { Search } = Input;

function Searchbar(){
    return(
        <div className='search-div'>
            <Search className = "search-bar" placeholder = "Search For A Book!" />
        </div>
    )
}
export default Searchbar;