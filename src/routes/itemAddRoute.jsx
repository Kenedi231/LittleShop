import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom'

const ItemAddRoute = ({ component: Component, user: user, ...rest }) => (
    <Route {...rest} render={(props) => (
        user.role !== undefined && user.role === 'Admin'
            ? <Component {...props} user={user} />
            : <Redirect to='/' />
    )} />
);

export default ItemAddRoute;