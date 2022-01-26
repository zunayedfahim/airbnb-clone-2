import React from 'react';
import { futureGetaways } from '../assets/data/futureGetaways';

const FutureGetaways = () => {

    const [selectedTab, setSelectedTab] = React.useState(Object.keys(futureGetaways)[0]);
    const tabItems = futureGetaways[selectedTab];

    return (
        <div className='h-[70vh] w-[85vw] mx-auto mt-24'>
            <h1 className='text-black text-2xl mb-5 font-medium'>Inspiration for future getaways</h1>
            <div className="after:content-[''] after:block after:h-[1px] after:w-full after:ml-2 after:bg-gray-300 -ml-2">
                {Object.keys(futureGetaways).map(item => {
                    return (
                        <button className={`${selectedTab===item ? "text-black font-medium after:content-[''] after:mx-2 after:h-0.5 after:block after:bg-black after:mt-4": "text-gray-500"} text-sm mr-2`} onClick={() => setSelectedTab(item)}><span className='hover:bg-gray-100 rounded-lg p-2 font-sans'>{item}</span></button>
                    )
                })}
            </div>
            <div className='grid grid-cols-4 text-black mt-10'>
                {tabItems.map(item => {
                    return (
                        <button className='text-left mb-10'>
                            <p className='font-light'>{item[0]}</p>
                            <p className='text-gray-500 font-light text-sm'>{item[1]}</p>
                        </button>
                    )
                })}
                <button className='text-left underline font-medium flex items-start'><p>Show more</p></button>

            </div>
        </div>
    );
};

export default FutureGetaways;
