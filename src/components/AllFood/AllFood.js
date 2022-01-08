import React, { useEffect, useState } from 'react';
import BraceFast from '../BreaceFast/BreaceFast';
import useFood from '../hooks/useFood';
import Lunch from '../Lunch/Lunch';

const AllFood = () => {
    const [food, setFood] = useFood();
    return (
        <div>
            <h1>food
                {food.length}
            </h1>
        </div>
    );
};

export default AllFood;