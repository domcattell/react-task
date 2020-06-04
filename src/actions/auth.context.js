import React, { createContext, useReducer } from 'react';
import accountData from '../placeholder_data/users.json';
import authReducer from '../reducers/authReducer';
import tokenValid from '../helpers/tokenValid';
import { LOGIN_SUCCESS, LOGIN_FAILED, AUTH_SUCCESS, AUTH_FAILED, LOGOUT } from './types';

export const AuthContext = createContext();
export const AuthActions = createContext();

export const AuthProvider = (props) => {
    //is Authenticated uses the return value from the "tokenValid" helper function.
    //this would usually be validated against the server to see if the token has expired or not
	const initialState = {
		loadingAuth: false,
		isAuthenticated: tokenValid(),
		loggedInUser: '',
		authError: ''
	};

	const [ state, dispatch ] = useReducer(authReducer, initialState);

    /**
     * auth state is a bit different, as it's pulling data from a local json file.
     * @login maps through the json file and checks if the @param user matches the json
     * data. if so, LOGIN will add a fake JSON token with the value "0000" to localStorage,
     * and sets the @loggedInUser to the username and @isAuthenticated to true, which
     * can then be used to check against authentication throughout the app.
     * if credentials do not match, it will set the state accordingly and will add
     * an error to @authError
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

    const checkAuth = () => {
        if(localStorage.getItem("pretend-json-token") === "0000") {
            dispatch({
                type: AUTH_SUCCESS
            }) 
        } else {
            dispatch({
                type: AUTH_FAILED
            })
        }
    }

    const logout = () => {
        dispatch({
            type: LOGOUT
        })
    }

	const actions = {
        login,
        checkAuth,
        logout
	};

	return (
		<AuthContext.Provider value={state}>
			<AuthActions.Provider value={actions}>{props.children}</AuthActions.Provider>
		</AuthContext.Provider>
	);
};
