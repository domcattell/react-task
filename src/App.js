import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/reset.css';

import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import UserPosts from './pages/UserPosts';
import Post from './pages/Post'
import NavigationBar from './components/Nav/NavigationBar';

import { PostsProvider } from './actions/posts.context';
import { UsersProvider } from './actions/users.context';

//configure react-toastify, an easy to use package that can be used
//across the whole app. Used in global state, and displays a toast
//with the error message when a request error occurs.
toast.configure({
	hideProgress: true,
	autoClose: 5000
});

function App() {
	/**
   * I use the contextAPI for global state, as I find it cleaner to use with
   * less markup. It's also very easy to setup and doesn't have to be configured
   * in any strict way. @PostsProvider and @AuthProvider are wrapped around all
   * other components, giving them access to global state and actions if the useContext
   * hook is used in said components. 
   */
	return (
		<PostsProvider>
			<UsersProvider>
				<NavigationBar />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/users/:id/posts" component={UserPosts} />
					<Route exact path="/posts/:id" component={Post} />
				</Switch>
			</UsersProvider>
		</PostsProvider>
	);
}

export default App;
