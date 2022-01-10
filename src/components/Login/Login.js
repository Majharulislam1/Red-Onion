import React from 'react';
import './login.css';
import logo from '../../images/logo2.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className='pt-20'>
                <div className='login'>
                    <div className='flex items-center justify-center h-screen'>
                        <div>
                            <div>
                                <img src={logo} width="300px" alt="" />
                            </div>
                            <form className='mt-6'>
                                <input type="email" className=' border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-primary focus:border-none mb-4' placeholder='E-mail' />
                                <br />
                                <input type="text" className=' border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-primary focus:border-none mb-4' placeholder='Password' />
                                <br />
                                <input className='bg-primary text-white  px-4 py-1 rounded w-full font-bold cursor-pointer mb-4 ' type="submit" value='submit' />
                            </form>
                            <Link to='/registration' className='text-primary flex justify-center'>Create a new Account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;