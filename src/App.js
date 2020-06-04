import React from 'react';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/reset.css';

import NavigationBar from './components/Nav/NavigationBar';
import Routes from './routes/Routes';

import { PostsProvider } from './actions/posts.context';
import { UsersProvider } from './actions/users.context';
import { AuthProvider } from './actions/auth.context';

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
				<AuthProvider>
					<NavigationBar />
					<Routes />
				</AuthProvider>
			</UsersProvider>
		</PostsProvider>
	);
}

export default App;
