import React from 'react';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';

import './food.css';

const FoodNavbar = () => {


    return (
        <div>
            <div className='text-center py-4'>
                <NavLink className={(isActive) => isActive ? 'active' : ''} to="breakFast" className='lg:mx-4 mx-2 lg:text-xl'>BreakFast</NavLink>
                <NavLink className={(isActive) => isActive ? 'active' : ''} to="lunch" className='lg:mx-4 mx-2 lg:text-xl'>Lunch</NavLink>
                <NavLink className={(isActive) => isActive ? 'active' : ''} to="dinner" className='lg:mx-4 mx-2 lg:text-xl'>Dinner</NavLink>
            </div>
            <Outlet />
        </div>
    );
};

export default FoodNavbar;