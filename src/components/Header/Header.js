import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo2.png';
import useApi from '../ContextApi/useContext';
import useFirebase from '../Firebase/useFirebase';

const Header = () => {
    const { allDetails, store, setStore } = useApi();

    const { user, signOutEmail } = allDetails;


    let key;
    if (store?.items) {
        key = Object.keys(store?.items);
    }

    const handleSignOut = () => {
        signOutEmail();
    }
    return (
        <div className=' bg-white w-full  z-50   fixed'>
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
                            <span className='bg-primary text-white px-1 rounded-full '>{key?.length ? key.length : 0}</span>
                        </Link>
                        {
                            user?.email ? <Link to="/" className='lg:mx-4 mx-2 hover:text-dark text-lightgray'>{user?.displayName}</Link> : <Link to="/login" className='lg:mx-4 mx-2 hover:text-dark text-lightgray'>Login</Link>
                        }
                        {
                            user?.email ? <Link to="/" className='lg:mx-4 mx-2'>
                                <button onClick={handleSignOut} className='bg-primary hover:bg-danger px-5 text-white  py-1 rounded-full'>Sign Out</button>
                            </Link> : <Link to="/registration" className='lg:mx-4 mx-2'>
                                <button className='bg-primary hover:bg-danger px-5 text-white  py-1 rounded-full'>Sign Up</button>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;