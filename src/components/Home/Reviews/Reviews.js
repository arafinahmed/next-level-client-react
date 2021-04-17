import React, { useEffect, useState } from 'react';
import './Reviews.css';

import Review from '../Review/Review';



const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://nextlevel1.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);
    console.log(reviews);
    return (
       <section className="reviews my-5 py-3">
           <div className="container">
               <div className="section-header">
                   <h1 className="text-center">What Our Students Says </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        reviews.map(review => <Review review={review} key={review._id}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Reviews;