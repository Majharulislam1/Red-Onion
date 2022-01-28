import React from 'react';
import { Link } from 'react-router-dom';


const FoodCart = (props) => {
    const { _id, img_url, name, price, sub_description } = props.food;
    return (
        <div>
            <Link to={`/foodDetails/${_id}`}>
                <div className=' p-4 hover:shadow-lg'>
                    <div className='flex justify-center items-center'>
                        <img src={img_url} width="50%" alt="" />
                    </div>
                    <div className='text-center'>
                        <h1 className='text-2xl py-2 text-dark'>{name}</h1>
                        <p className='py-1 text-lightgray'>{sub_description}</p>
                        <h1 className='text-2xl py-1 text-dark'>${price}</h1>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default FoodCart;