import React from 'react';
import FoodCart from '../FoodCart/FoodCart';
import useFood from '../hooks/useFood';

const Lunch = () => {
    const [food, setFood] = useFood();

    const lunch = food.slice(7, 13);

    return (
        <div>
            <div className='lg:w-4/5 md:w-9/12 w-full mx-auto pt-8' >
                <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4'>
                    {
                        lunch?.map(fd => <FoodCart key={fd?.id} food={fd}>
                        </FoodCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Lunch;