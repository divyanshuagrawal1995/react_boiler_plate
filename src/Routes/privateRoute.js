import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
export const PrivateRoute = ({ component: Component, ...rest }) => {
    const [token] = useLocalStorage('token')
    return (
        <Route
            {...rest}
            render={props => token ?
                <Component {...props} /> :
                <Redirect to={{ pathname: '/signup', state: { from: props.location } }} />
            }

        />

    )
}
export default PrivateRoute