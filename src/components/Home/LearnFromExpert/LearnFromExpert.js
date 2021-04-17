import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { ContextApi } from '../../../App';
import './LearnFromExpert.css';
const LearnFromExpert = () => {
    const [loggedInUser] = useContext(ContextApi);
    const history = useHistory();
    return (
        <div className="expert-learn">
            <div>
                <h1>Join Now and Learn
                    <br />
                    Straight from the Experts
                </h1>
                {
                    loggedInUser.email ? <p className="text-center"><button onClick={() =>history.push('/courses')} className="btn btn-success btn-lg">Enroll Now</button></p>    :
                    <p className="text-center"><button onClick={() =>history.push('/account/join')} className="btn btn-success btn-lg">Join Now</button></p>    
                }
            </div>
        </div>
    );
};

export default LearnFromExpert;