import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const userData = useLoaderData();
    return (
        <div>
            <h3>All friends: {userData.length}</h3>
            <div className='friend-list'>
                {
                    userData.map(user=> <Friend user={user} key={user.id}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;<h1>this is friend list </h1>