import React, { useContext, useEffect, useState } from 'react';
import { ContextApi } from '../../../App';
import DashboardNav from '../DashboardNav/DashboardNav';
import './Checkout.css';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [loggedInUser] = useContext(ContextApi);
    const handlePaymentSuccess = paymentId => {
        const studentDetails = {
            email: loggedInUser.email, 
            courseId: courseInfo._id,
            courseTitle: courseInfo.title,
            paymentId: paymentId,
            courseStatus: 'Not Started',
            enrollTime: new Date()
        }
        fetch('http://localhost:8888/addStudent', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(studentDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert("Successfully enrolled to the course");
            }
            else{
                alert("Please Try again");
            }
        })
        console.log("Successful");

    }
    const selectedCourseID = useContext(ContextApi)[2];
    const [courseInfo, setCourseInfo] = useState({});
    useEffect(() => {
        fetch(`http://localhost:8888/course/${selectedCourseID}`)
        .then(res => res.json())
        .then(result => {
            setCourseInfo(result)
            
        })
        
    }, [selectedCourseID])
    console.log(selectedCourseID);
    console.log(courseInfo);

    console.log(loggedInUser.displayName);
    return (
        <div className="dashboard-container">
            <DashboardNav></DashboardNav>
            <div className="checkout-container">
                {
                    courseInfo.title ? <>
                        <p><strong>Course Name: </strong> {courseInfo.title}</p>
                        <p><strong>Course Fee: </strong> ${courseInfo.fee}</p>
                        <p>{loggedInUser.displayName} - {loggedInUser.email}</p>
                        <ProcessPayment handlePaymentSuccess={handlePaymentSuccess}></ProcessPayment> </>
                        :
                        <div>
                            <h3>No course is selected.
                                <br/>
                                Please select a course from <Link to="/courses">catalogue</Link>.
                            </h3>
                        </div>
                }
            </div>
        </div>
    );
};

export default Checkout;