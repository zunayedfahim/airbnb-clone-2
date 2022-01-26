import React from 'react';

const ExperiencesCard = ({name, buttonText, image}) => {
    return (
        <div 
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
            }}
            className='h-[100vh] w-1/2 rounded-xl mr-5 pt-10 pl-10'

        >
            <h1 className='text-white text-5xl font-medium'>Things to do</h1>
            <h1 className='text-white text-5xl font-medium'>{name}</h1>
            <button className='bg-white px-5 py-3 mt-5 font-medium rounded-lg hover:bg-gray-100'>{buttonText}</button>
        </div>
    );
};

export default ExperiencesCard;
