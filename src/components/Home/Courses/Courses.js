import React from 'react';
import './Courses.css';
import linux from '../../../images/linux.jpg';
import CourseCard from '../CourseCard/CourseCard';
const courses = [
    {
        title: "JavaScript",
        fee: 500,
        shortDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ab sapiente maxime sequi perferendis, dolore doloremque quam adipisci totam quaerat.",
        img: linux,
        id: 1
    },
    {
        title: "Linux System Administration",
        fee: 501,
        shortDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ab sapiente maxime sequi perferendis, dolore doloremque quam adipisci totam quaerat.",
        img: linux,
        id: 2
    },
    {
        title: "JavaScript",
        fee: 502,
        shortDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ab sapiente maxime sequi perferendis, dolore doloremque quam adipisci totam quaerat.",
        img: linux,
        id: 3
    }
]
const Courses = () => {
    return (
        <div className="courses-container">
            <h1 className="text-center">Boost Up Your Skill With NEXT Level</h1>
            <br/>
            <div className="container all-courses">
            {
                courses.map(course => <CourseCard key={course.fee} course={course}></CourseCard>)
            }
            </div>
            
        </div>
    );
};

export default Courses;