import React, {useEffect, useContext} from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from '../HOC/PrivateRoute';

import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import UserPosts from '../pages/UserPosts';
import Post from '../pages/Post';

import {AuthActions} from '../actions/auth.context';

const Routes = () => {
    const {checkAuth} = useContext(AuthActions);
 
    useEffect(() => {
        checkAuth();
    },[])

	return (
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/register" component={Register} />
			<PrivateRoute exact path="/users/:id/posts" component={UserPosts} />
			<PrivateRoute exact path="/posts/:id" component={Post} />
		</Switch>
	);
};

export default Routes;
