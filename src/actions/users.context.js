import React, {createContext, useReducer} from 'react';
import axios from 'axios';
import users from '../placeholder_data/users.json';
import {GET_USERS, GET_USERS_FAILED} from './types';
import usersReducer from '../reducers/usersReducer';

export const UsersContext = createContext();
export const UsersActions = createContext();

export const UsersProvider = (props) => {

    //initial state
    const initialState = {
        users: [],
        currentUser: null,
        usersError: null,
        loadingUsers: true
    }

    //setup userReducer hook using 
    const [state, dispatch] = useReducer(usersReducer, initialState);

    //actions
    //get all users
    const getUsers = async () => {
        try {
            const result = await axios.get("https://jsonplaceholder.typicode.com/users")
            dispatch({
                type: GET_USERS,
                payload: result.data
            })
        } catch(err) {
            dispatch({
                type: GET_USERS_FAILED,
            })
        }
    }

    //store all actions here and add to the value in the provider
    const actions = {
        getUsers
    }

    //return providers that will wrap around the App component and allow children access to context
    return (
        <UsersContext.Provider value={state}>
            <UsersActions.Provider value={actions}>
                {props.children}
            </UsersActions.Provider>
        </UsersContext.Provider>
    )
}

