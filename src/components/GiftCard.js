import React from 'react';

const GiftCard = () => {
    return (
        <div className='bg-black h-[60vh] flex items-center justify-center pt-36'>
            <div className='w-[85vw] bg-[#E5E5E5] rounded-xl flex justify-between items-center pt-32 pb-10 pl-28 pr-5 mt-40'>
                <div className='text-center text-[#222222]'>
                    <p>Introducing</p>
                    <h1 className='text-7xl mt-1 font-medium'>Airbnb</h1>
                    <h1 className='text-7xl mb-1 font-medium'>gift cards</h1>
                    <button className='bg-[#222222] text-white rounded-md px-5 py-3 hover:bg-black'>Shop now</button>
                </div>
                <img src={require("../assets/images/gift-card-bg.png")} className=''/>
            </div>
        </div>
    );
};

export default GiftCard;
