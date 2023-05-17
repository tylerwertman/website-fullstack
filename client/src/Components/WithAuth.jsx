
import React from 'react';
import Cookies from 'js-cookie';
import NotFound from './NotFound';

const withAuth = (Component) => {
    const WithAuthComponent = (props) => {
        const { darkMode } = props;
        const cookieValue = Cookies.get('userToken');

        let isAuthenticated

        if (cookieValue) {
            isAuthenticated = true
        } else {
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
