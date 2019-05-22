import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom'

const AuthRoute = ({ component: Component, user: user, ...rest }) => (
    <Route {...rest} render={(props) => (
        user.role === undefined
            ? <Component {...props} user={user} />
            : <Redirect to='/' />
    )} />
);

export default AuthRoute;