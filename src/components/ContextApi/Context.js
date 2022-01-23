import React, { createContext, useEffect, useState, useRef } from 'react';


import useFirebase from '../Firebase/useFirebase';


export const contextApi = createContext();

const Context = ({ children }) => {

    const [store, setStore] = useState({});

    const allDetails = useFirebase();

    const [isMounted, setMounted] = useState(true);



    useEffect(() => {
        window.localStorage.setItem('store', JSON.stringify(store))
    }, [store])

    useEffect(() => {
        const store = window.localStorage.getItem('store');
        if (isMounted) {
            setStore(JSON.parse(store))
        }
        return (() => {
            setMounted(false)
        })
    }, [store]);







    return (
        <contextApi.Provider value={{ allDetails, store, setStore }}>
            {children}
        </contextApi.Provider>
    );
};

export default Context;