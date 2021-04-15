import React from 'react';
import Courses from '../Courses/Courses';
import Header from '../Header/Header';
import LearnFromExpert from '../LearnFromExpert/LearnFromExpert';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Courses></Courses>
            <Reviews></Reviews>
            <LearnFromExpert></LearnFromExpert>
        </div>
    );
};

export default Home;