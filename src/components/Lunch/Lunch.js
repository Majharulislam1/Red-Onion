import React from 'react';
import FoodCart from '../FoodCart/FoodCart';
import useFood from '../hooks/useFood';
var Spinner = require('react-spinkit');

const Lunch = () => {
    const [food, setFood] = useFood();

    const lunch = food.slice(7, 13);

    return (
        <div>
            <div className='lg:w-4/5 md:w-9/12 w-full mx-auto pt-8' >
                {
                    lunch?.length > 1 ?

                        <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4'>
                            {
                                lunch?.map(fd => <FoodCart key={fd?.id} food={fd}>
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

export default Lunch;