
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
// import Main from './Main';
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
