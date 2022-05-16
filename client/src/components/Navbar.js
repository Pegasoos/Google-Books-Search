import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Row } from 'antd';
import { BookTwoTone, SearchOutlined } from '@ant-design/icons'
import './Navbar.css'
function Navbar() {
    
        return(
    <Row className='navbar-row'>
            <h3 className = "logo"><span className = 'red-span'>Google</span> <span className='yellow-span'>Books</span> <span className = 'green-span'>Search</span></h3> 
            <Menu mode='horizontal' className = 'nav-menu'>
                <Menu.Item key = "search"><Link to ='/'><SearchOutlined /> Search</Link></Menu.Item>
                <Menu.Item key = "saved"><Link to ='/saved'><BookTwoTone className='book-icon' />Saved</Link></Menu.Item>
            </Menu>    
    </Row>
            )
        
    };

export default Navbar;