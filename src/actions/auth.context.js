import React, { createContext, useReducer, useCallback } from 'react';
import accountData from '../placeholder_data/users.json';
import authReducer from '../reducers/authReducer';
import tokenValid from '../helpers/tokenValid';
import { LOGIN_SUCCESS, LOGIN_FAILED, AUTH_SUCCESS, AUTH_FAILED, LOGOUT, CLEAR_AUTH } from './types/types';

export const AuthContext = createContext();
export const AuthActions = createContext();

export const AuthProvider = (props) => {
	//is Authenticated uses the return value from the "tokenValid" helper function.
	//this would usually be validated against the server to see if the token has expired or not
	const initialState = {
		loadingAuth: false,
		isAuthenticated: tokenValid(),
		loggedInUser: '',
		authMsg: null
	};

	//useReducer hook used with auth reducer and initial state
	const [ state, dispatch ] = useReducer(authReducer, initialState);

	/**
     * auth state is a bit different, as it's pulling data from a local json file.
     * @login maps through the json file and checks if the @param user matches the json
     * data. if so, LOGIN will add a fake JSON token with the value "0000" to localStorage,
     * and sets the @loggedInUser to the username and @isAuthenticated to true, which
     * can then be used to check against authentication throughout the app.
     * if credentials do not match, it will set the state accordingly and will add
     * an error message to @authMsg
     * 
     * @checkAuth cheats a little here, as obviously there is no way to validate a user
     * from the server. instead, it looks to see if the "pretend-json-token" in localStorage
     * is set to "0000", which is the only valid token for this app. If true, it will
     * set the @loggedInUser from localStorage, otherwise if false, it will wipe localStorage
     * and reset state values. Obviously any user could simply
     * add this value to localStorage and the authentication will work but in a real world example
     * it would first check if the token is valid through a helper function, 
     * and give an appropriate response to that, instead of "0000" being the only valid token.
     */

	//actions functions

	//log in user
	const login = (user) => {
		accountData.map((users) => {
			if (users.username === user.username && users.password === user.password) {
				return dispatch({
					type: LOGIN_SUCCESS,
					payload: user
				});
			} else {
				return dispatch({
					type: LOGIN_FAILED
				});
			}
		});
	};

	//check if user authenticated
	const checkAuth = useCallback(() => {
		if (localStorage.getItem('pretend-json-token') === '0000') {
			dispatch({
				type: AUTH_SUCCESS
			});
		} else {
			dispatch({
				type: AUTH_FAILED
			});
		}
	}, []);

	//logout user
	const logout = () => {
		dispatch({
			type: LOGOUT
		});
	};

	const clearAuthMsg = useCallback(() => {
		dispatch({ type: CLEAR_AUTH });
	}, []);

	//list of actions to use provider
	const actions = {
		login,
		checkAuth,
		logout,
		clearAuthMsg
	};

	//return providers
	return (
		<AuthContext.Provider value={state}>
			<AuthActions.Provider value={actions}>{props.children}</AuthActions.Provider>
		</AuthContext.Provider>
	);
};
