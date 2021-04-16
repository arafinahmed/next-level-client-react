import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
                {
                    courses.length ? <div className="mycourses-container">
                        {
                            courses.map(course => <MyCourse key={course._id} course={course}></MyCourse>)
                        }
                    </div> :
                        <h3 className="mt-5">You Have no courses. Please enroll first..
                        <br/>
                       Check our latest <Link to="/courses">course</Link>
                        </h3>
                }
            </div>
        </div>
    );
};

export default MyCourses;