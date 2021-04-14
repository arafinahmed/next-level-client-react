import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Courses from '../Courses/Courses';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Courses></Courses>
            <Footer></Footer>
        </div>
    );
};

export default Home;