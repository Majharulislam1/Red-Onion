import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

import useApi from '../ContextApi/useContext';
import Footer from '../Footer/Footer';
import empty from '../../images/empty.svg';

const Cart = () => {
    const { store, setStore } = useApi();

    const [foodCart, setFoodCart] = useState([]);





    useEffect(() => {
        if (!store?.items) {
            return;
        }


        fetch('https://pure-lake-44398.herokuapp.com/food/cart', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ ids: Object.keys(store.items) })
        })
            .then(res => res.json())
            .then(data => {
                setFoodCart(data);
            })
            .catch(error => {
                console.log(error.message)
            })

    }, [store])


    console.log(foodCart);

    const quantity = (id) => {
        return store.items[id];
    }

    const increment = (id) => {
        const existQut = store.items[id];
        const _store = { ...store };
        _store.items[id] = existQut + 1;
        setStore(_store);
    }

    const dicrement = (id) => {
        const existQut = store.items[id];
        if (existQut === 1) {
            return;
        }
        const _store = { ...store };
        _store.items[id] = existQut - 1;
        setStore(_store);
    }
    let total = 0;

    const sum = (id, price) => {
        const sumation = price * quantity(id);
        total += sumation;
        return sumation
    }

    const handleDelete = (id) => {
        const _store = { ...store };
        const qut = _store.items[id];
        delete _store.items[id];
        _store.totalItems -= qut;
        setStore(_store);
        setFoodCart(foodCart.filter(product => product._id !== id))

    }

    const handleOrder = () => {
        alert("Order successfully");
        setFoodCart([]);
        setStore({});
    }



    return (
        <>
            <div className='pt-20'>
                {
                    foodCart.length ?
                        <div className='lg:flex lg:flex-row md:flex-row  flex flex-col md:flex lg:w-5/6 md:w-5/6 w-full mx-auto  justify-around'>

                            <div className='lg:w-2/4 md:w-2/4 w-full lg:order-1 md:order-1 order-2 flex lg:justify-start  justify-center items-center'>
                                <div className='p-4'>
                                    <h1 className='lg:text-4xl md:text-4xl text-2xl text-dark font-bold py-4'>Edit Delivery Details</h1>
                                    <form className='py-4'>
                                        <input type="email" className='border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-primary focus:border-none mb-4' placeholder='enter your email address' required name="" id="" />
                                        <br />
                                        <input type="text" className='border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-primary focus:border-none mb-4' placeholder='Road No' required />
                                        <br />
                                        <input type="text" className='border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-primary focus:border-none mb-4' placeholder='Flat of Floor' required />
                                        <br />
                                        <input type="text" className='border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-primary focus:border-none mb-4' placeholder='Business Name' required />
                                        <br />
                                        <textarea placeholder='Address' className='border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-primary focus:border-none mb-4' id="" cols="30" required rows="4"></textarea>
                                        <br />
                                        <input className='bg-primary text-white  px-4 py-1 rounded w-full font-bold cursor-pointer ' type="submit" value="Submit" />
                                    </form>
                                </div>
                            </div>

                            <div className='lg:w-2/4 md:w-2/4 lg:order-2 md:order-2 order-1 w-full flex justify-center'>
                                <div className='p-4 mt-4'>
                                    <h1 className='text-3xl  text-dark'>Form <span className='font-bold'>Star Kabab And Restaurant</span></h1>
                                    <h2 className='text-2xl   text-dark'>Arriving in 20-30 min</h2>
                                    <h2 className='text-2xl  text-dark'>107 Rd No 9</h2>
                                    <br />
                                    <br />
                                    {
                                        foodCart.map(fc => {
                                            return (
                                                <div className='flex justify-between rounded items-center m-lg shadow-lg p-4'>
                                                    <div>
                                                        <img width='100px' src={fc.img_url} alt="" />

                                                    </div>
                                                    <div className='text-center'>
                                                        <button onClick={() => increment(fc._id)} className="bg-primary px-4 py-2 rounded-full leading-none">+</button>

                                                        <b className='px-4'>{quantity(fc._id)}</b>

                                                        <button onClick={() => dicrement(fc._id)} className="bg-primary px-4 py-2 rounded-full leading-none">-</button>
                                                        <br />
                                                        <b >${sum(fc._id, fc.price)}</b>
                                                    </div>
                                                    <div>
                                                        <button className='bg-primary px-4 py-2 text-white rounded-full' onClick={() => handleDelete(fc._id)}>Delete</button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    <br />
                                    <br />
                                    <p className='flex justify-between text-lg text-dark'><span>Sub total:</span> <span>${total}</span></p>
                                    <p className='flex justify-between text-lg text-dark'><span>Tex: 5%</span> <span>${Math.round(total * 0.05)}</span></p>
                                    <p className='flex justify-between text-2xl font-bold'><span>Total:</span> <span>${total + Math.round(total * 0.05)}</span></p>
                                    <button onClick={handleOrder} className='bg-lightgray mt-4 text-white  px-4 py-1 rounded w-full font-bold cursor-pointer '>PlaceOrder</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='w-1/2 mx-auto'>
                            <img src={empty} alt="" />
                        </div>
                }


            </div>
            <Footer></Footer>
        </>
    );
};

export default Cart;