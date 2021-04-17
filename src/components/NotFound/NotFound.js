import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
    return (
        <div>
            <div className="not-found">
                <h3>Sorry!!! <br />
            Go to <Link to="/">home page</Link></h3>
            </div>
        </div>
    );
};

export default NotFound;