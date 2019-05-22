import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom'

const CartRoute = ({ component: Component, user: user, ...rest }) => (
    <Route {...rest} render={(props) => (
        user.role !== undefined
            ? <Component {...props} user={user} />
            : <Redirect to='/' />
    )} />
);

export default CartRoute;