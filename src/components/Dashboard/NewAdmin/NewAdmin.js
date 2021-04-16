import React from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';

const NewAdmin = () => {
    const handleSubmit = (e) => {
        const email = e.target.email.value;
        e.target.email.value = "";
        fetch('https://nextlevel1.herokuapp.com/addAdmin', {
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({email})
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert("Admin added Successfully");
            }
            else{
                alert("Sorry!!! Something error");
            }
        })
        e.preventDefault();
    }
    return (
        <div className="dashboard-container">
            <DashboardNav></DashboardNav>
            <div className="checkout-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Enter email</label>
                    <br/>
                    <input name="email" className="form-control" type="text" required placeholder="admin@email.com"/>
                    <br/>
                    <button className="btn btn-success">Make Admin</button>
                </form>
            </div>
        </div>
    );
};

export default NewAdmin;