import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/reset.css';

import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import NavigationBar from './components/Nav/NavigationBar';

import { PostsProvider } from './actions/posts.context';
import { UsersProvider } from './actions/users.context';

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
				</Switch>
			</UsersProvider>
		</PostsProvider>
	);
}

export default App;
