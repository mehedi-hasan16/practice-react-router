import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='nav-bar'>
            < Link to='/'>Home</Link>
            < Link to='/blog'>Blog</Link>
            < Link to='/friends'>Friends</Link>
            < Link to='/contact'>Contact</Link>
        </div>
    );
};

export default Header;