import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';

const Home = () => {
    const navigationSpinner = useNavigation();
    return (
        <div>
            <Header></Header>
            <div>{navigationSpinner.state ==='loading'?'Loading...': ''}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;