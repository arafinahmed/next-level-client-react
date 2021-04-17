import React from 'react';
import './Review.css';
import man from '../../../images/man.png';
const Review = (props) => {
    const { review, name, city, img } = props.review;
    return (
        <div className="review-card shadow-sm ">
            <div className="">
                <div className="card-footer d-flex  align-items-center">
                    <img className="mx-3 rounded" src={img || man} alt="" width="60" />
                    <div>
                        <h6 className="text-primary">{name}</h6>
                        <p className="m-0">{city}</p>
                    </div>
                </div>
                <div className="card-body">
                    <p className="text-center">{review}</p>
                </div>
            </div>

        </div>
    );
};

export default Review;