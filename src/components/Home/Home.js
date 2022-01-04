import React from 'react';
import { Route } from 'react-router-dom';
import About from '../About/About';
import BraceFast from '../BreaceFast/BreaceFast';
import Food from '../Food/Food';
import FoodNavbar from '../FoodNavbar/FoodNavbar';
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection';

const Home = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <FoodNavbar></FoodNavbar>
            <BraceFast></BraceFast>
            <About></About>
            <Footer></Footer>
        </>
    );
};

export default Home;