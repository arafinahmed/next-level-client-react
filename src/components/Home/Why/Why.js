import React from 'react';
import image1 from '../../../images/image1.svg';
import image2 from '../../../images/image2.svg';
import image3 from '../../../images/image3.svg';
import WhyCard from '../WhyCard/WhyCard';
import './Why.css';
const datas = [
    {
        img: image1,
        title: "Personalized learning",
        description: "Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.",
        id: 1
    },
    {
        img: image2,
        title: "Trusted content",
        description: "Created by experts, Khan Academy’s library of trusted practice and lessons covers math, science, and more. Always free for learners and teachers.",
        id: 2
    },
    {
        img: image3,
        title: "Tools to empower teachers",
        description: "With NEXT Level, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.",
        id: 3
    }

]

const Why = () => {
    return (
        <div>
            <h3 className="text-center m-5">Why NEXT Level works</h3>
            <div className="why-card-container container mb-5">
                {
                    datas.map(data => <WhyCard data={data} key={data.id}></WhyCard>)
                }
            </div>
        </div>
    );
};

export default Why;