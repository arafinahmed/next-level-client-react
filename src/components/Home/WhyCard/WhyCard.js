import React from 'react';
import './WhyCard.css';
const WhyCard = ({data}) => {
    return (
        <div className="whycard">
            <p className="text-center"><img src={data.img} alt=""/></p>
            <h5 className="text-center">{data.title}</h5>
            <p className="text-center">{data.description}</p>
        </div>
    );
};

export default WhyCard;