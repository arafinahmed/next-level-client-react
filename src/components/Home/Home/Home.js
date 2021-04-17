import React from 'react';
import Courses from '../Courses/Courses';
import Header from '../Header/Header';
import LearnFromExpert from '../LearnFromExpert/LearnFromExpert';
import Reviews from '../Reviews/Reviews';
import Why from '../Why/Why';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Courses></Courses>
            <Why></Why>
            <Reviews></Reviews>
            <LearnFromExpert></LearnFromExpert>
        </div>
    );
};

export default Home;