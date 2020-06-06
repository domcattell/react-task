import React, {useEffect, useContext} from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from '../HOC/PrivateRoute';

import {AuthActions} from '../actions/auth.context';

import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import UserPosts from '../pages/UserPosts';
import Post from '../pages/Post';
import AccountSettings from '../pages/AccountSettings';
import ErrorPage from '../pages/ErrorPage';


const Routes = () => {
	const {checkAuth} = useContext(AuthActions);
	
	//checks if user authenticated on mount. Would hypothetically
	//log out user if web token is invalid, or use refresh token
    useEffect(() => {
		checkAuth();
    },[checkAuth])

	//displays a list of app routes. added errorpage if route is not a match
	return (
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/register" component={Register} />
			<PrivateRoute exact path="/posts/:id" component={Post} />
			<PrivateRoute exact path="/users/:id/posts" component={UserPosts} />
			<PrivateRoute exact path="/users/myaccount" component={AccountSettings} />
			<Route component={ErrorPage}/>
		</Switch>
	);
};

export default Routes;
