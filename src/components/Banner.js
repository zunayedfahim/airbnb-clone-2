import React from "react";


const Banner = () => {
    return (
        <div className="bg-black lg:h-screen flex items-center justify-center pb-20 pt-20">
            <div className="bannerImage flex flex-col items-center justify-end w-[86vw] h-[90vh] rounded-xl pb-20">
                <h1 className="text-4xl font-semibold">Not sure where to go? Perfect.</h1>
                <button className="mt-5 bg-white rounded-full text-lg font-semibold text-black px-8 py-3 hover:bg-gray-100"><span className=" text-transparent bg-clip-text bg-gradient-to-br from-violet-800 to-red-600">I'm flexible</span></button>
            </div>
        </div>
    );
};

export default Banner;
