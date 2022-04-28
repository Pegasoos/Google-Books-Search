import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const Navbar = () => {
<header>
    <h2 className = "logo">Google Books Search</h2>
    <Menu>
        <Menu.Item><Link to ='/'>Search</Link></Menu.Item>
        <Menu.Item><Link to ='/saved'>Saved</Link></Menu.Item>
    </Menu>
</header>
};

export default Navbar;