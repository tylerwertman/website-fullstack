
import React from 'react';
import Cookies from 'js-cookie';
import NotFound from '../NotFound';
import jwtdecode from 'jwt-decode'

const withAuth = (Component) => {
    const WithAuthComponent = (props) => {
        // const { darkMode } = props;
        const cookieValue = Cookies.get('userToken');

        let isAuthenticated

        if (jwtdecode(cookieValue).email === "t@w.com") {
            isAuthenticated = true
        } else {
            console.log(`inauthenticated email detected: ${jwtdecode(cookieValue).email}`)
            isAuthenticated = false
        }
        if (isAuthenticated) {
            return <Component {...props} />;
        } else {
            return <NotFound />;
        }
    };

    return WithAuthComponent;
};

export default withAuth;
