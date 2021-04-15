import React from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <DashboardNav></DashboardNav>
            <div className="checkout-container">
                <h3>Welcome to Dashboard</h3>
            </div>
        </div>
    );
};

export default Dashboard;