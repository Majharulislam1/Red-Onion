import React from 'react';
import useApi from '../ContextApi/useContext';
import Footer from '../Footer/Footer';
import useFood from '../hooks/useFood';

const Cart = () => {
    const { allCart, allDetails } = useApi();
    const [cart, setCart] = allCart;
    const [food, setFood] = useFood();
    let foodCart;
    for (const id of cart) {

        const fdId = id.id;
        foodCart = food.filter(fb => fb._id === fdId);

    }

    return (
        <>
            <div className='pt-20'>
                <div className='lg:flex md:flex lg:w-5/6 md:w-5/6 w-full mx-auto  justify-around'>
                    <div className='lg:w-2/4 md:w-2/4 w-full flex lg:justify-start  justify-center items-center'>
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
                    <div className='lg:w-2/4 md:w-2/4 w-full flex justify-center'>
                        <div className='p-4 mt-4'>
                            <h1 className='text-3xl  text-dark'>Form <span className='font-bold'>Star Kabab And Restaurant</span></h1>
                            <h2 className='text-2xl   text-dark'>Arriving in 20-30 min</h2>
                            <h2 className='text-2xl  text-dark'>107 Rd No 9</h2>
                            <br />
                            <br />
                            {

                            }
                            <br />
                            <br />
                            <p className='flex justify-between text-lg text-dark'><span>Sub total:</span> <span>$0.00</span></p>
                            <p className='flex justify-between text-lg text-dark'><span>Tex: 5%</span> <span>$0.00</span></p>
                            <p className='flex justify-between text-lg text-dark'><span>Delivery Fee:</span> <span>$0.00</span></p>
                            <p className='flex justify-between text-2xl font-bold'><span>Total:</span> <span>$0.00</span></p>
                            <button className='bg-lightgray mt-4 text-white  px-4 py-1 rounded w-full font-bold cursor-pointer '>PlaceOrder</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Cart;