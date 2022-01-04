import React from 'react';
import './Hero.css';

const HeroSection = () => {
    return (
        <div className='hero'>
            <div className='flex items-center flex-col justify-center'>
                <div>
                    <h1 className='lg:text-5xl md:text-4xl text-3xl text-dark pt-40'>Best Food Waiting for your Belly</h1>
                </div>
                <div className='py-10 w-full text-center'>
                    <input type="text" placeholder='Search Food Items' className=' rounded-full w-2/3 lg:w-2/5 px-2 outline-offset-1 outline-primary py-1' />
                    <input type='submit' value='search' className='bg-primary hover:bg-danger px-5 text-white  py-1 rounded-full input' />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;