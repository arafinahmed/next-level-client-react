import React from 'react';
import { Link } from 'react-router-dom';

const DashboardNav = () => {
    return (
        <div>            
            <nav className="dashboard-nav">
                <ul>
                    <li><Link style={{ textDecoration: 'none', color:'black' }} to="/newAdmin">Add a Admin</Link></li>
                    <li><Link style={{ textDecoration: 'none', color:'black' }} to="/newCourse">Add a Course</Link></li>
                    <li><Link style={{ textDecoration: 'none', color:'black' }} to="/checkout">Checkout</Link></li>
                    <li><Link style={{ textDecoration: 'none', color:'black' }} to="/mycourses">My Courses</Link></li>
                    <li><Link style={{ textDecoration: 'none', color:'black' }} to="/teacher">Review</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default DashboardNav;