import React from 'react';
import ExperiencesCard from './ExperiencesCard';

const Experiences = () => {
    return (
        <div className='text-black w-[85vw] mx-auto'>
            <h1 className='text-3xl font-medium my-8'>Discover Airbnb Experiences</h1>
            <div className='flex justify-between'>
                <ExperiencesCard name={"on your trip"} buttonText={"Experiences"} image={require("../assets/images/experience-1.png")} />
                <ExperiencesCard name={"from home"} buttonText={"Online Experiences"} image={require("../assets/images/experience-2.png")} />
            </div>
        </div>
    );
};

export default Experiences;
