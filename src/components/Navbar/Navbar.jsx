import React from 'react';
import { NavLink } from 'react-router-dom';
import Twitter from '../../assets/images/Navbar/twitter-logo.svg';
import Home from '../../assets/images/Navbar/home-outline.svg';
import Explore from '../../assets/images/Navbar/explore.svg';
import Notify from '../../assets/images/Navbar/notification.svg';
import Message from '../../assets/images/Navbar/messages.svg';
import Bookmark from '../../assets/images/Navbar/bookmarks.svg';
import List from '../../assets/images/Navbar/lists.svg';
import Profile from '../../assets/images/Navbar/profile-fill.svg';
import More from '../../assets/images/Navbar/more.svg';
import './navbar.scss';

const Navbar = () => {
    return (
        <nav className='Navbar p-3'>
            <div>
                <NavLink to='/'>
                    <img src={Twitter} alt="Twitter Logo" width='30' height='24' />
                </NavLink>
                <ul className='navList mb-5 mt-3'>
                    <li className='listItem mb-3'>
                        <NavLink to='/home' className={({isActive})=> isActive ? "navlink link__homeActive" :"navlink"}>
                            <img className="navImg" src={Home} alt="Home Icon" width='20' height='20' />
                            Home
                        </NavLink>
                    </li>
                    <li className='listItem mb-3'>
                        <NavLink to='/explore' className={({isActive})=> isActive ? "navlink link__exploreActive" :"navlink"}>
                            <img className="navImg" src={Explore} alt="Message Icon" width='20' height='20' />
                            Explore
                        </NavLink>
                    </li>
                    <li className='listItem mb-3'>
                        <NavLink to='/notify' className={({isActive})=> isActive ? "navlink link__notifyActive" :"navlink"}>
                            <img className="navImg" src={Notify} alt="Message Icon" width='20' height='20' />
                            Notification
                        </NavLink>
                    </li>
                    <li className='listItem mb-3'>
                        <NavLink to='/message' className={({isActive})=> isActive ? "navlink link__messageActive" :"navlink"}>
                            <img className="navImg" src={Message} alt="Message Icon" width='20' height='20' />
                            Message
                        </NavLink>
                    </li>
                    <li className='listItem mb-3'>
                        <NavLink to='/bookmark' className={({isActive})=> isActive ? "navlink link__bookmarkActive" :"navlink"}>
                            <img className="navImg" src={Bookmark} alt="Message Icon" width='20' height='20' />
                            Bookmarks
                        </NavLink>
                    </li>
                    <li className='listItem mb-3'>
                        <NavLink to='/list' className={({isActive})=> isActive ? "navlink link__listActive" :"navlink"}>
                            <img className="navImg" src={List} alt="Message Icon" width='20' height='20' />
                            List
                        </NavLink>
                    </li>
                    <li className='listItem mb-3'>
                        <NavLink to='/profile' className={({isActive})=> isActive ? "navlink link__profileActive" :"navlink"}>
                            <img className="navImg" src={Profile} alt="Profile Icon" width='20' height='20' />
                            Profile
                        </NavLink>
                    </li>
                    <li className='listItem mb-3'>
                        <NavLink to='/more' className={({isActive})=> isActive ? "navlink link__moreActive" :"navlink"}>
                            <img className="navImg" src={More} alt="Message Icon" width='20' height='20' />
                            More
                        </NavLink>
                    </li>
                </ul>
                </div>
        </nav>
    );
};


export default Navbar;