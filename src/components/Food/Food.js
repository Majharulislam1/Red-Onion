import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BraceFast from '../BreaceFast/BreaceFast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';

const Food = () => {
    return (
        <>
            <BraceFast></BraceFast>
            <Lunch></Lunch>
            <Dinner></Dinner>
        </>
    );
};

export default Food;