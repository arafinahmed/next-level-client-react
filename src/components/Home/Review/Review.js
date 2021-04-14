import React from 'react';
import './Review.css';
const Review = (props) => {
    const { quote, name, from, img } = props.review;
    return (
        <div className="card shadow-sm ">
            <div className="review-card">
                <div className="card-footer d-flex  align-items-center">
                    <img className="mx-3" src={img} alt="" width="60" />
                    <div>
                        <h6 className="text-primary">{name}</h6>
                        <p className="m-0">{from}</p>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text text-center">{quote}</p>
                </div>
            </div>

        </div>
    );
};

export default Review;