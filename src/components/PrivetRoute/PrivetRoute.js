import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useApi from '../ContextApi/useContext';
import useFirebase from '../Firebase/useFirebase';

const PrivetRoute = ({ children, ...rest }) => {
    const location = useLocation();
    const { allCart, allDetails } = useApi();
    const { user } = allDetails;
    return (
        user.email ? children :
            <Navigate to="/login"
                replace
                state={{ path: location.pathname }}
            />
    );
};

export default PrivetRoute;