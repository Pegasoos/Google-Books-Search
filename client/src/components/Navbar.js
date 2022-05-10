import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Row } from 'antd';
import { BookTwoTone, SearchOutlined } from '@ant-design/icons'
import './Navbar.css'
function Navbar() {
    
        return(
    <Row className='navbar-row'>
            <h3 className = "logo">Google Books Search</h3> 
            <Menu mode='horizontal'>
                <Menu.Item key = "search"><Link to ='/'><SearchOutlined /> Search</Link></Menu.Item>
                <Menu.Item key = "saved"><Link to ='/saved'><BookTwoTone className='book-icon' />Saved</Link></Menu.Item>
            </Menu>    
    </Row>
            )
        
    };

export default Navbar;