import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { accountService } from '../Login/Account.Services';

export const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        accountService.isAuthenticated()
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
)