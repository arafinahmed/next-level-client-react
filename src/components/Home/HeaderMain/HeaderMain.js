import React from 'react';
import { useHistory } from 'react-router';
import './HeaderMain.css';
const HeaderMain = () => {
    const history = useHistory();
    return (
        <div className="header-main d-flex justify-content-center align-items-center">
            <div>
                <h1>Restless learners <br /> change the world</h1>
                <p className="text-center"><button onClick={() => history.push('/courses')} className="btn btn-success btn-lg">Learn With NEXT Level</button></p>    
            </div>
        </div>
    );
};

export default HeaderMain;