import React, { useContext } from 'react';
import { AuthContext } from '../actions/auth.context';
import { Route, Redirect } from 'react-router-dom';

//a private route to be added to pages that need authentication.
//checks if isAuthenticated from global state is true, if so, return the page, else
//redirect to the login page
const PrivateRoute = ({ component: Component, ...rest }) => {
	const { isAuthenticated } = useContext(AuthContext);

	return (
		<Route {...rest} render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)} />
	);
};

export default PrivateRoute;
