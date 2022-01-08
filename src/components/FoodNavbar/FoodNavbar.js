import React from 'react';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import './food.css';

const FoodNavbar = () => {
    return (
        <div>
            <div className='text-center'>
                <NavLink to="breakFast" className='lg:mx-4 mx-2 lg:text-xl'>BreakFast</NavLink>
                <NavLink to="lunch" className='lg:mx-4 mx-2 lg:text-xl'>Lunch</NavLink>
                <NavLink to="dinner" className='lg:mx-4 mx-2 lg:text-xl'>Dinner</NavLink>
            </div>
            <Outlet />
        </div>
    );
};

export default FoodNavbar;