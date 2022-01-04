import React, { useState } from 'react';
import about1 from '../../images/about/about1.png';
import about2 from '../../images/about/about2.png';
import about3 from '../../images/about/about3.png';

const About = () => {
    const [hook, setHook] = useState(true);
    const [response, setResponse] = useState(true);
    const [delivery, setDelivery] = useState(true);
    return (
        <div>
            <div className='w-11/12 mx-auto mt-10'>
                <div>
                    <h1 className='text-dark lg:text-5xl md:text-4xl lg:text-left md:text-left text-center text-3xl py-4'>Why you choose us</h1>
                    <div className='lg:w-1/2 md:w-3/4 w-full'>
                        <p className='text-dark py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente eaque repellendus asperiores nisi! Architecto, praesentium eligendi consequatur inventore fuga eius totam officia adipisci. Nostrum quia soluta vel distinctio delectus!</p>
                    </div>
                </div>
                <div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4">
                        <div>
                            <div className='p-4'>
                                <img src={about1} alt="" />
                            </div>
                            <div className='flex p-6'>
                                <div className='px-4'>
                                    <i className="fas fa-bus-alt bg-primary text-white px-4 py-3 text-2xl rounded-full"></i>
                                </div>
                                <div>
                                    <h3 className='text-2xl'>Quick Delivery</h3>
                                    <p className='p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <span className={hook ? "hidden" : "block"}>
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                                    </p>
                                    <button onClick={() => setHook(!hook)} className='text-lg font-bold text-blue'> {hook ? "see more" : "see less"} {hook ? <i className="fas fa-arrow-right bg-green text-white ml-4 p-2"></i> : <i className="fas fa-arrow-left bg-green text-white ml-4 p-2"></i>} </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='p-4'>
                                <img src={about3} alt="" />
                            </div>
                            <div className='flex p-6'>
                                <div className='px-4'>
                                    <i className="fas fa-bell bg-primary text-white px-4 py-3 text-2xl rounded-full"></i>
                                </div>
                                <div>
                                    <h3 className='text-2xl'>A Good Auto Responder</h3>
                                    <p className='p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <span className={response ? "hidden" : "block"}>
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                                    </p>
                                    <button onClick={() => setResponse(!response)} className='text-lg font-bold text-blue'> {response ? "see more" : "see less"} {response ? <i className="fas fa-arrow-right bg-green text-white ml-4 p-2"></i> : <i className="fas fa-arrow-left bg-green text-white ml-4 p-2"></i>} </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='p-4'>
                                <img src={about2} alt="" />
                            </div>
                            <div className='flex p-6'>
                                <div className='px-4'>
                                    <i className="fas fa-truck bg-primary text-white px-4 py-3 text-2xl rounded-full"></i>
                                </div>
                                <div>
                                    <h3 className='text-2xl'>Quick Delivery</h3>
                                    <p className='p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <span className={delivery ? "hidden" : "block"}>
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                                    </p>
                                    <button onClick={() => setDelivery(!delivery)} className='text-lg font-bold text-blue'> {delivery ? "see more" : "see less"} {delivery ? <i className="fas fa-arrow-right bg-green text-white ml-4 p-2"></i> : <i className="fas fa-arrow-left bg-green text-white ml-4 p-2"></i>} </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;