import React, { createContext } from 'react';
import { useState } from 'react/cjs/react.development';
import useFirebase from '../Firebase/useFirebase';


export const contextApi = createContext();
const Context = ({ children }) => {


    const [cart, setCart] = useState([]);
    const allCart = [cart, setCart];
    const allDetails = useFirebase()
    const all = { allCart, allDetails };

    return (
        <contextApi.Provider value={all}>
            {children}
        </contextApi.Provider>
    );
};

export default Context;