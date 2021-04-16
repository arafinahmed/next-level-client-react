import React, { useContext, useEffect, useState } from 'react';
import { ContextApi } from '../../../App';
import DashboardNav from '../DashboardNav/DashboardNav';
import MyCourse from '../MyCourse/MyCourse';
import './MyCourses.css';
const MyCourses = () => {
    const [loggedInUser] = useContext(ContextApi);
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8888/enrolledCourses?email=${loggedInUser.email}`, {
            method: 'GET'            
        })
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [loggedInUser]);
    return (
        <div className="dashboard-container">
            <DashboardNav></DashboardNav>
            <div className="checkout-container">
                <h5>Dear, {loggedInUser.displayName} your enrolled courses: </h5>
                <div className="mycourses-container">
                    {
                        courses.map(course => <MyCourse key={course._id} course={course}></MyCourse>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyCourses;