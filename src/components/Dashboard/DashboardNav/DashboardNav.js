import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextApi } from '../../../App';

const DashboardNav = () => {
    const isAdmin = useContext(ContextApi)[4];
    console.log("object nav", isAdmin);
    return (
        <div>
            <nav className="dashboard-nav">
                <ul>
                    {
                        isAdmin ?
                            <>
                                <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/newAdmin">Add a Admin</Link></li>
                                <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/newCourse">Add a Course</Link></li>
                                <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/manageCourses">Manage Course</Link></li>
                                <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/courseStatus">Course Status</Link></li>
                            </> :
                            <>
                                <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/checkout">Checkout</Link></li>
                                <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/mycourses">My Courses</Link></li>
                                <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/addReview">Review</Link></li>

                            </>
                    }

                </ul>
            </nav>
        </div>
    );
};

export default DashboardNav;