import React from 'react';
import FoodCart from '../FoodCart/FoodCart';
import useFood from '../hooks/useFood';
var Spinner = require('react-spinkit');
const BraceFast = () => {
    const [food, setFood] = useFood();
    const braceFast = food.slice(0, 6);
    return (
        <div>
            <div className='lg:w-4/5 md:w-9/12 w-full mx-auto pt-8' >
                {
                    braceFast?.length > 1 ? <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                        {
                            braceFast?.map(fd => <FoodCart key={fd?._id} food={fd}>
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

export default BraceFast;