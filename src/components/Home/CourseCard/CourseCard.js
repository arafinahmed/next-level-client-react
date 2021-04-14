import React from 'react';
import './CourseCard.css';

const CourseCard = ({course}) => {
    return (
        <div className="course-card shadow-sm">
            <img  src={course.img} alt=""/>
            <div className="info-course-container">
            <h5>{course.title}</h5>
            <p>{course.shortDescription}</p>
            <div className="d-flex justify-content-between">
                <button className="btn btn-success">Book</button>
                <button className="btn">$500</button>
            </div>
            </div>
        </div>
    );
};

export default CourseCard;