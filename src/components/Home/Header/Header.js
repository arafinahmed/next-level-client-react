import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavigationBar from '../NavigationBar/NavigationBar';

const Header = () => {
    return (
        <div>
            <NavigationBar/>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;