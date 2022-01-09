import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useApi from '../ContextApi/useContext';
import Footer from '../Footer/Footer';
import useFood from '../hooks/useFood';




const FoodDetails = () => {
    const { id } = useParams();
    const [food, setFood] = useFood();
    const foodDetails = food.find(fd => fd._id === id);

    const [count, setCount] = useState(1);



    const [cart, setCart] = useApi();

    const handleAddToCart = (id, count) => {
        const newCart = { id, count };
        const carts = [...cart, newCart];


        setCart(carts);
    }

    console.log(cart);

    return (
        <>
            <div>
                <div className='pt-16'>
                    <div className='w-4/5 mx-auto lg:flex md:flex'>
                        <div className='lg:w-2/4 md:w-2/4 w-full p-6'>
                            <h1 className='lg:text-5xl md:text-5xl text-3xl py-4 text-dark'>{foodDetails?.name} </h1>
                            <p className='py-4'>{foodDetails?.description}</p>
                            <div className='flex items-center'>
                                <h1 className='text-2xl font-bold text-dark'>Price:${foodDetails?.price}</h1>
                                <div className=' shadow-lg ml-16 px-4 py-2 rounded-full'>
                                    <button onClick={() => setCount(count + 1)} className='text-lg text-dark fas fa-plus hover:border-border rounded-lg hover:border-2 px-2' />
                                    <span className='p-2 text-xl font-bold'>{count < 1 ? 1 : count}</span>
                                    <button onClick={() => setCount(count > 1 && count - 1)} className='text-lg text-dark fas hover:border-border rounded-lg fa-minus hover:border-2 px-2' />
                                </div>
                            </div>
                            <br />
                            <button onClick={() => handleAddToCart(id, count)} className='bg-primary hover:bg-danger text-lg px-5 text-white  py-1 rounded-full'>
                                <i className="fas fa-cart-arrow-down" />
                                Add
                            </button>
                        </div>
                        <div className='lg:w-2/4 md:w-2/4 w-full p-6'>
                            <img src={foodDetails?.img_url} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default FoodDetails;