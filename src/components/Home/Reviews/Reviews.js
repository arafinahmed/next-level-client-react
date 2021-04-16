import React, { useEffect, useState } from 'react';
import './Reviews.css';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import Review from '../Review/Review';

const reviewData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8888/reviews')
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
                        reviews.map(review => <Review review={review} key={review.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Reviews;