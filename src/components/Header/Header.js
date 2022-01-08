import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo2.png';

const Header = () => {
    return (
        <div className=' bg-white w-full border-2 z-50   fixed'>
            <div className='lg:w-4/5 w-full p-4 mx-auto'>
                <div className='flex justify-between items-center'>
                    <div className='w-3/6'>
                        <Link to='/'>
                            <img src={logo} className='lg:w-1/4 md:w-2/6 w-2/5' alt="" />
                        </Link>
                    </div>
                    <div className='w-3/6 flex justify-end'>
                        <Link to="/cart" className='lg:mx-4 mx-2'>
                            <i className="fas fa-cart-arrow-down"></i>
                            <span>0</span>
                        </Link>
                        <Link to="/login" className='lg:mx-4 mx-2 hover:text-dark text-lightgray'>Login</Link>
                        <Link to="/registration" className='lg:mx-4 mx-2'>
                            <button className='bg-primary hover:bg-danger px-5 text-white  py-1 rounded-full'>Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;