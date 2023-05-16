
import React from 'react';
import Cookies from 'js-cookie';
import NotFound from './NotFound';

const withAuth = (Component) => {
    return () => {
    const cookieValue = Cookies.get('userToken');

    let isAuthenticated

    if(cookieValue){
        isAuthenticated = true
    }else{
        isAuthenticated = false
    }

        if (isAuthenticated) {
            return <Component />;
        } else {
            return <NotFound />;
        }
    };
};

export default withAuth;
