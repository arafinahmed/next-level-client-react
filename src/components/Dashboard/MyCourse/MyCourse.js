import React from 'react';
import './MyCourse.css';
const MyCourse = ({ course }) => {
    const { courseTitle, courseId, courseStatus } = course;
    return (
        <div className="my-course">
            <p>
                Status: <strong>{courseStatus}</strong>
                <br />
                {courseTitle}
                <br />
                <small>{courseId}</small>
            </p>
        </div>
    );
};

export default MyCourse;