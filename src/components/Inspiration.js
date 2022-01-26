import React from 'react';
import InspirationCard from './InspirationCard';

const Inspiration = () => {
    return (
        <div className='bg-white w-[85vw] mx-auto mt-[50vh] text-black'>
            <h1 className='text-3xl font-medium mb-10'>Inspiration for your next trip</h1>
            <div className='flex justify-between'>
                <InspirationCard image={require("../assets/images/nearby-1.jpg")} color={'#DE3151'} city={"Rangpur"} km={253}/>
                <InspirationCard image={require("../assets/images/nearby-2.jpg")} color={'#BC1A6E'} city={"Dhaka"} km={10}/>
                <InspirationCard image={require("../assets/images/nearby-3.jpg")} color={'#D93B30'} city={"Sylhet"} km={197}/>
                <InspirationCard image={require("../assets/images/nearby-4.jpg")} color={'#CC2D4A'} city={"Chattogram"} km={207}/>
            </div>
        </div>  
    );
};

export default Inspiration;
