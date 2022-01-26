import React from 'react';

const InspirationCard = ({image, color, city, km}) => {
    return (
        <div className='h-max w-64 rounded-xl mb-10'>
            <img src={image} className='rounded-t-xl'/>
            <div className="rounded-b-xl h-40 pt-5 pl-5" style={{backgroundColor: color}}>
                <h1 className='text-white text-2xl font-medium mb-2'>{city}</h1>
                <p className='text-white'>{km} kilometers away</p>
            </div>
        </div>
    );
};

export default InspirationCard;
