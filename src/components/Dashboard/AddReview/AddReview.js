import React, { useContext } from 'react';
import { ContextApi } from '../../../App';
import DashboardNav from '../DashboardNav/DashboardNav';

const AddReview = () => {
    const [loggedInUser] = useContext(ContextApi);
    const handleSubmit = (e) => {
        const name = e.target.name.value;
        const city = e.target.city.value;
        const review = e.target.review.value;
        const img = loggedInUser.photoURL;
        console.log(name, city, review, img);
        fetch('https://nextlevel1.herokuapp.com/addReview', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, city, review, img})
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    alert("Review added Successfully");
                }
                else{
                    alert("Something error!!!");
                }
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault();
    }
    return (
        <div className="dashboard-container">
            <DashboardNav></DashboardNav>
            <div className="checkout-container">
            <form onSubmit={handleSubmit}>
                
                    <label htmlFor="name">Name</label>

                    <input name="name" className="form-control" type="text" required placeholder="James Bond" defaultValue={loggedInUser.displayName} />
                    <br />
                    <label htmlFor="city">City</label>
                    <input name="city" className="form-control" type="text" required placeholder="Dhaka" />

                    <br />
                    <label htmlFor="review">Your Review</label>
                    <textarea name="review" class="form-control" rows="3"></textarea>
                    <br />
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;