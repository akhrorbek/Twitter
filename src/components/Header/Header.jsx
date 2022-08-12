import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import './header.scss';
const Header = () => {
    return (
        <div className='header'>
            <Navbar/>
            <a className='tweetLink' href="#">Tweet</a>
        </div>
    );
};


export default Header;