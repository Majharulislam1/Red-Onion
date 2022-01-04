import React from 'react';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <>
            <div className="bg-dark mt-16 p-4">
                <div className='w-4/5 mx-auto'>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-4 ">
                        <div>
                            <img src={logo} width="300px" alt="" />
                        </div>
                        <div></div>
                        <div>
                            <a href='#' className='text-white hover:text-primary '>About online Food</a><br />
                            <a href='#' className='text-white hover:text-primary '>Read Our Blog</a><br />
                            <a href='#' className='text-white hover:text-primary '>Sign Up to delivery</a><br />
                            <a href='#' className='text-white hover:text-primary '>About your Restaurant</a>
                        </div>
                        <div>
                            <a href='#' className='text-white hover:text-primary '>Get Help</a><br />
                            <a href='#' className='text-white hover:text-primary '>Read FAQ</a><br />
                            <a href='#' className='text-white hover:text-primary '>View All cities</a><br />
                            <a href='#' className='text-white hover:text-primary '>Restaurant near me</a>
                        </div>
                    </div>
                    <div className='flex justify-between mt-16'>
                        <p className='text-sm text-lightgray'>Copyright © 2020 Online Food</p>
                        <div className='flex justify-around'>
                            <a href='#' className='mx-2 text-white hover:text-primary'>Privacy Policy</a>
                            <a href='#' className='mx-2 text-white hover:text-primary'>Terms of Use</a>
                            <a href='#' className='mx-2 text-white hover:text-primary'>Pricing</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;