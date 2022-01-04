import React, { useEffect, useState } from 'react';
import BraceFast from '../BreaceFast/BreaceFast';
import useFood from '../hooks/useFood';
import Lunch from '../Lunch/Lunch';

const AllFood = () => {
    // const [food, setFood] = useState([]);
    // useEffect(() => {
    //     fetch("./fackdb.json")
    //         .then(res => res.json())
    //         .then(data => setFood(data))
    // }, [])
    // const [food, setFood] = useFood();

    // const braceFast = food.slice(0, 6);
    // const lunch = food.slice(7, 13);
    // console.log(food, 'lunch')
    return (
        <div>
            {/* <BraceFast food={braceFast}></BraceFast>
            <Lunch food={lunch}></Lunch> */}
        </div>
    );
};

export default AllFood;