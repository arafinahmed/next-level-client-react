import React from 'react';
import { useHistory } from 'react-router';
import './LearnFromExpert.css';
const LearnFromExpert = () => {
    const history = useHistory();
    return (
        <div className="expert-learn">
            <div>
                <h1>Join Now and Learn
                    <br />
                    Straight from the Experts
                </h1>
                <p className="text-center"><button onClick={() => history.push('/login')} className="btn btn-success btn-lg">Join Now</button></p>    
            </div>
        </div>
    );
};

export default LearnFromExpert;