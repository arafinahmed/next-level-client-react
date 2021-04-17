import React, { useEffect, useState } from 'react';
import './Courses.css';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const [allCourses, setAllCourses] = useState([]);
    useEffect(() => {
        fetch('https://nextlevel1.herokuapp.com/allCourses')
        .then(res => res.json())
        .then(data => setAllCourses(data));
    }, []);
    console.log(allCourses);
    return (
        <div className="courses-container">
            <h3 className="text-center">Boost Up Your Skill With NEXT Level</h3>
            <br/>
            <div className="container all-courses">
            {
                allCourses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
            }
            </div>
            
        </div>
    );
};

export default Courses;