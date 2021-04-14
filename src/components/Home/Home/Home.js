import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Courses from '../Courses/Courses';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Courses></Courses>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;