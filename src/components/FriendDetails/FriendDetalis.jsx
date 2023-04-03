import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetalis = () => {
    const userDetails = useLoaderData();
    const {name, phone, username, email, website, address:{street, suite, city, zipcode}}= userDetails;
    return (
        <div>
            <h1>Everything Friend details in here</h1>
            <h3>{name}</h3>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>User-name: {username}</p>
            <p>Website: {website}</p>
            <p>Address: {street}, {suite}, {city}, {zipcode}</p>
        </div>
    );
};

export default FriendDetalis;