import React from 'react';

const Superhost = () => {

    const image = require("../assets/images/superhost.png")
    return (
        <div style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} className='h-screen w-full flex flex-col justify-between pl-20 py-20'>
            <div>
                <h1 className='text-white font-medium text-7xl '>Questions</h1> 
                <h1 className='text-white font-medium text-7xl '>about</h1> 
                <h1 className='text-white font-medium text-7xl '>hosting?</h1>
            </div>
            <button className='text-black bg-white rounded-lg py-3 px-5 text-sm font-medium w-min whitespace-nowrap hover:bg-gray-100'>Ask a Superhost</button>
        </div>
    );
};

export default Superhost;
