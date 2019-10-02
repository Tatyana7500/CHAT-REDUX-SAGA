import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import utils from '../utils/requestHelper';

const PrivateRoute = ({component: Component, ...rest }) => (
    <Route { ...rest } render = { props => (
        utils.getLocale() !== null ? (
            <Component { ...props } />
        ) : (
         <Redirect to = {{
             pathname: '/login',
             state: { from: props.location }
             }}
         />
        )
    )}
    />
);

export default PrivateRoute;