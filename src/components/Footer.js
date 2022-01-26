import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';
import { ImInstagram } from "react-icons/im";
import { footerData } from '../assets/data/footerData';


const Footer = () => {
    return (
        <div className='text-black text-sm w-full bg-gray-100 pb-5'>
            <div className=" w-[85vw] mx-auto after:content-[''] after:block after:h-[1px] after:w-full after:bg-gray-300 after:mt-10">
                <div className='grid grid-cols-4 pt-16'>
                    {Object.keys(footerData).map(item => {
                        return (
                            <h1 className='font-bold'>{item}</h1>

                        )
                    })}
                </div>
                <div className="grid grid-cols-4">
                    {Object.values(footerData).map(item => {
                        return (
                            <ul>
                                {item.map(a => {
                                    return(
                                        <li className='font-light mt-5'>{a}</li>
                                    )
                                })}
                            </ul>
                        )
                    })}
                </div>
            </div>
            <div className='w-[85vw] mx-auto mt-5 flex justify-between'>
                <div className='flex'>
                    <h1 className='mr-8'>© 2022 Airbnb, Inc. </h1>
                    <ul className='flex list-disc'>
                        <li><a href='#' className=''>Privacy</a></li>
                        <li className='mx-8'><a href='#' className=''>Terms</a></li>
                        <li><a href='#' className=''>Sitemap</a></li>
                    </ul>
                </div>

                <div className='flex items-center'>
                    <FiGlobe className='text-lg'/>
                    <a href='#' className='underline ml-2'>English(US)</a>
                    <p className='ml-5'>$ <a href='#' className='underline'>USD</a></p>
                    <FaFacebookF className='ml-16 text-lg'/>
                    <FaTwitter className='ml-5 text-lg'/>
                    <ImInstagram className='ml-5 text-lg'/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
