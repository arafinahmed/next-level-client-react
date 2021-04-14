import React from 'react';
import { Link } from 'react-router-dom';
import './FooterBar.css';
const FooterBar = () => {
    return (        
            <nav className="footer-bar">
                <ul>
                    <li><Link style={{ textDecoration: 'none', color:'black' }} to="/courses">Courses</Link></li>
                    <li><Link style={{ textDecoration: 'none', color:'black' }} to="/learn">Learn</Link></li>
                    <li><Link style={{ textDecoration: 'none', color:'black' }} to="/teacher">Teachers</Link></li>
                    <li><Link style={{ textDecoration: 'none', color:'black' }} to="/guide">Guide</Link></li>
                    <li><Link style={{ textDecoration: 'none', color:'black' }} to="/login">Login</Link></li>
                </ul>
            </nav>
        
    );
};

export default FooterBar;