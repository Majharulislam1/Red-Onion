import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';

const Registration = () => {
    return (
        <div>
            <div className='pt-20'>
                <div className='login'>
                    <div className='flex items-center justify-center h-screen'>
                        <div>
                            <div>
                                <img src={logo} width="300px" alt="" />
                            </div>
                            <form className='mt-6'>
                                <input type="text" className=' border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-primary focus:border-none mb-4' placeholder='Name' />
                                <br />
                                <input type="email" className=' border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-primary focus:border-none mb-4' placeholder='E-mail' />
                                <br />
                                <input type="text" className=' border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-primary focus:border-none mb-4' placeholder='Password' />
                                <br />
                                <input className='bg-primary text-white  px-4 py-1 rounded w-full font-bold cursor-pointer mb-4 ' type="submit" value='submit' />
                            </form>
                            <Link to='/login' className='text-primary flex justify-center'>Already have an account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;