import React, { useContext, useEffect, useState } from 'react';
import { ContextApi } from '../../../App';
import DashboardNav from '../DashboardNav/DashboardNav';
import './Checkout.css';
import linux from '../../../images/linux.jpg'
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
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
const Checkout = () => {
    const handlePaymentSuccess = paymentId => {
        console.log("Successful");
    
      }
    const selectedCourseID = useContext(ContextApi)[2];
    const [courseInfo, setCourseInfo] = useState({});
    useEffect(() => {
        const filtered = courses.find(course => course.id === selectedCourseID);
        setCourseInfo(filtered);
    }, [selectedCourseID])
    console.log(selectedCourseID);
    console.log(courseInfo);
    

    return (
        <div className="dashboard-container">
            <DashboardNav></DashboardNav>
            <div className="checkout-container">
                <p><strong>Course Name: </strong> {courseInfo.title}</p>
                <p><strong>Course Fee: </strong> ${courseInfo.fee}</p>
                <p>Arafin Ahmed - arafin2021@gmail.com</p>
                <ProcessPayment handlePaymentSuccess={handlePaymentSuccess}></ProcessPayment>
            </div>
        </div>
    );
};

export default Checkout;