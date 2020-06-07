import { LOGIN_SUCCESS, LOGIN_FAILED, AUTH_SUCCESS, AUTH_FAILED, LOGOUT, CLEAR_AUTH } from '../actions/types/types';

const reducer = (state, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			localStorage.setItem('pretend-json-token', '0000');
			localStorage.setItem('user', action.payload.username);
			return {
				...state,
				loadingAuth: false,
				loggedInUser: action.payload.username,
				isAuthenticated: true,
				authMsg: null
			};

		case LOGIN_FAILED:
			localStorage.removeItem('pretend-json-token');
			localStorage.removeItem('user');
			return {
				...state,
				loadingAuth: false,
				loggedInUser: '',
				isAuthenticated: false,
				authMsg: 'Error logging in. Please check the credentials you entered were correct'
			};

		case AUTH_SUCCESS:
			return {
				...state,
				loadingAuth: false,
				loggedInUser: localStorage.getItem('user'),
				isAuthenticated: true,
				authMsg: null
			};

		case AUTH_FAILED:
			localStorage.removeItem('pretend-json-token');
			localStorage.removeItem('user');
			return {
				...state,
				loadingAuth: false,
				loggedInUser: '',
				isAuthenticated: false,
				authMsg: null
			};

		case LOGOUT:
			localStorage.removeItem('pretend-json-token');
			localStorage.removeItem('user');
			return {
				...state,
				loadingAuth: false,
				loggedInUser: '',
				isAuthenticated: false,
				authMsg: "Successfully logged out"
			};

		case CLEAR_AUTH:
			return {
				...state,
				authMsg: null
			}

		default:
			return state;
	}
};

export default reducer;
