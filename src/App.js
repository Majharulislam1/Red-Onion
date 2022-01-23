import './index.css';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import FoodNavbar from './components/FoodNavbar/FoodNavbar';
import AllFood from './components/AllFood/AllFood';
import BraceFast from './components/BreaceFast/BreaceFast';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Food from './components/Food/Food';
import NotFound from './components/NotFound/NotFound';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Context from './components/ContextApi/Context';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';

function App() {
  return (
    <>
      <Context>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route path='/' element={<BraceFast />} />
              <Route path='breakFast' element={<BraceFast />} />
              <Route path='lunch' element={<Lunch />} />
              <Route path='dinner' element={<Dinner />} />
            </Route>
            <Route path='/cart' element={
              <PrivetRoute>
                <Cart />
              </PrivetRoute>


            } />
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/foodDetails/:id' element={<FoodDetails></FoodDetails>}></Route>
            <Route path="*" element={<NotFound />} ></Route>
          </Routes>
        </BrowserRouter>
      </Context>
    </>
  );
}

export default App;
