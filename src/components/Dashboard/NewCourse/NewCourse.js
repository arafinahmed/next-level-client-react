import React, { useState } from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';

const NewCourse = () => {
    const [file, setFile] = useState(null);
    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = (e) => {
        const title = e.target.title.value;
        const fee = e.target.fee.value;
        const shortDescription = e.target.shortDescription.value;
        const formData = new FormData()

        formData.append('file', file);
        formData.append('title', title);
        formData.append('fee', fee);
        formData.append('shortDescription', shortDescription);
        fetch('https://nextlevel1.herokuapp.com/addCourse', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    alert("Course added Successfully");
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
                    <label htmlFor="title">Course Name</label>

                    <input name="title" className="form-control" type="text" required placeholder="Javascript" />
                    <br />
                    <label htmlFor="fee">Course Fee</label>
                    <input name="fee" className="form-control" type="number" required placeholder="500" />

                    <br />
                    <label htmlFor="img">Add image</label>
                    <br />
                    <input onChange={handleFileChange} type="file" name="img" required />
                    <br />
                    <br />
                    <label htmlFor="shortDescription">Short Description</label>
                    <textarea name="shortDescription" class="form-control" rows="3"></textarea>
                    <br />
                    <button className="btn btn-success">Add</button>
                </form>
            </div>
        </div>
    );
};

export default NewCourse;