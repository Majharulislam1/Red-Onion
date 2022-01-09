import React, { createContext } from 'react';
import { useState } from 'react/cjs/react.development';


export const contextApi = createContext();
const Context = ({ children }) => {


    const [cart, setCart] = useState([]);
    const allCart = [cart, setCart];
    return (
        <contextApi.Provider value={allCart}>
            {children}
        </contextApi.Provider>
    );
};

export default Context;