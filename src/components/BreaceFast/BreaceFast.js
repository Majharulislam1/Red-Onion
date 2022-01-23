import React from 'react';
import FoodCart from '../FoodCart/FoodCart';
import FoodNavbar from '../FoodNavbar/FoodNavbar';
import useFood from '../hooks/useFood';

const BraceFast = () => {
    const [food, setFood] = useFood();
    const braceFast = food.slice(0, 6);
    return (
        <div>
            <div className='lg:w-4/5 md:w-9/12 w-full mx-auto pt-8' >
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                    {
                        braceFast?.map(fd => <FoodCart key={fd?._id} food={fd}>
                        </FoodCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BraceFast;