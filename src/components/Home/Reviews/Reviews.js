import React from 'react';
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
    return (
       <section className="reviews my-5 py-3">
           <div className="container">
               <div className="section-header">
                   <h1 className="text-center">What Our Students Says </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        reviewData.map(review => <Review review={review} key={review.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Reviews;