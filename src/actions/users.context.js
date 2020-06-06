import React, { createContext, useReducer, useCallback } from 'react';
import axios from 'axios';
import {
	GET_USERS,
	CLEAR_USERS,
	CLEAR_USER,
	GET_USERS_FAILED,
	GET_CURRENT_USER,
	GET_CURRENT_USER_FAILED,
	RESET_ERROR
} from './types/types';
import usersReducer from '../reducers/usersReducer';
import {BASE_API_URL} from './variables/api'

//create new seperate contexts for actions and state
export const UsersContext = createContext();
export const UsersActions = createContext();

//export provider
export const UsersProvider = (props) => {
	//initial state
	const initialState = {
		users: [],
		currentUsername: null,
		loadingUsers: true,
		loadingUser: true,
		usersMsg: '',
		usersError: false
	};

	//setup userReducer hook using usersReducer and the initial state declared above
	const [ state, dispatch ] = useReducer(usersReducer, initialState);
	
	//action functions
	//gets all users
	const getUsers = useCallback(
		async () => {
			try {
				const result = await axios.get(`${BASE_API_URL}users`);
				dispatch({
					type: GET_USERS,
					payload: result.data
				});
			} catch (err) {
				dispatch({
					type: GET_USERS_FAILED
				});
			}
		},
		[]
	);
	
	//gets current user
	const getCurrentUser = useCallback(async(userID) => {
		try {
			const result = await axios.get(`${BASE_API_URL}users/${userID}`);
			dispatch({
				type: GET_CURRENT_USER,
				payload: result.data
			});
		} catch (err) {
			dispatch({
				type: GET_CURRENT_USER_FAILED
			});
		}
	},[])

	//clear user state
	const clearUser = useCallback(() => {
		dispatch({
			type: CLEAR_USER
		});
	},[])

	//clear users state
	const clearUsers = () => {
		dispatch({
			type: CLEAR_USERS
		});
	};

	//reset inprogress boolean
	const resetError = useCallback(() => {
		dispatch({type: RESET_ERROR})
	},[])
	
	//store all actions here and add to the value in the provider
	const actions = {
		getUsers,
		getCurrentUser,
		clearUser,
		clearUsers,
		resetError
	};

	//return providers that will wrap around the App component and allow children access to context
	return (
		<UsersContext.Provider value={state}>
			<UsersActions.Provider value={actions}>{props.children}</UsersActions.Provider>
		</UsersContext.Provider>
	);
};
