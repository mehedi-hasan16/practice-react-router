import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='nav-bar'>
            < ActiveLink to='/'>Home</ActiveLink>
            < ActiveLink to='/blog'>Blog</ActiveLink>
            < ActiveLink to='/friends'>Friends</ActiveLink>
            < ActiveLink to='/contact'>Contact</ActiveLink>
        </div>
    );
};

export default Header;