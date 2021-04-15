import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { ContextApi } from '../../../App';
import './CourseCard.css';

const CourseCard = ({course}) => {
    let history = useHistory();
    const setSelectedCourseID = useContext(ContextApi)[3];
    const bookNow = (id) => {
        history.replace(`/checkout`);
        setSelectedCourseID(id);
    }
    return (
        <div className="course-card shadow-sm">
            <img  src={`data:${course.img.contentType};base64,${course.img.img}`} alt=""/>
            <div className="info-course-container">
            <h5>{course.title}</h5>
            <p>{course.shortDescription}</p>
            <div className="d-flex justify-content-between">
                <button onClick={() => bookNow(course._id) } className="btn btn-success">Book</button>
                <button className="btn">${course.fee}</button>
            </div>
            </div>
        </div>
    );
};

export default CourseCard;