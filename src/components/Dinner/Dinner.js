import React from 'react';
import FoodCart from '../FoodCart/FoodCart';
import useFood from '../hooks/useFood';
var Spinner = require('react-spinkit');
const Dinner = () => {
    const [food, setFood] = useFood();
    const dinner = food.slice(12, 18);
    console.log(dinner);
    return (
        <div>
            <div className='lg:w-4/5 md:w-9/12 w-full mx-auto pt-8' >
                {
                    dinner?.length > 1 ? <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4'>
                        {
                            dinner?.map(fd => <FoodCart key={fd?.id} food={fd}>
                            </FoodCart>)
                        }
                    </div> :
                        <div className='flex justify-center'>
                            <Spinner name='ball-scale-multiple' color='#ff4565' />
                        </div>
                }


            </div>
        </div>
    );
};

export default Dinner;