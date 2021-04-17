import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextApi } from '../../../App';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ClassIcon from '@material-ui/icons/Class';
import RateReviewIcon from '@material-ui/icons/RateReview';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AddBoxIcon from '@material-ui/icons/AddBox';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import BackspaceIcon from '@material-ui/icons/Backspace';
const DashboardNav = () => {
    const isAdmin = useContext(ContextApi)[4];
    console.log("object nav", isAdmin);
    return (
        <div>
            <nav className="dashboard-nav">
                <div>
                    {
                        isAdmin ?
                            <>
                                <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/newAdmin"><GroupAddIcon/>Add a Admin</Link></li>
                                <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/newCourse"><AddBoxIcon/>Add a Course</Link></li>
                                <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/manageCourses"><BackspaceIcon/>Manage Course</Link></li>
                                <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/courseStatus"><TrendingUpIcon/>Course Status</Link></li>
                            </> :
                            <>
                                <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/checkout"><AddShoppingCartIcon></AddShoppingCartIcon>Checkout</Link></li>
                                <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/mycourses"><ClassIcon/>My Courses</Link></li>
                                <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/addReview"><RateReviewIcon/>Review</Link></li>

                            </>
                    }

                </div>
            </nav>
        </div>
    );
};

export default DashboardNav;