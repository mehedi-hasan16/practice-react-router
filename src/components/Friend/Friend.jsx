import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({user}) => {
    const {id, name, email, phone}= user;
    return (
        <div className='friend-container'>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/friend/${id}`}>See Details</Link>

        </div>
    );
};

export default Friend;