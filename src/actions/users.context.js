import React, {createContext, useReducer} from 'react';
import axios from 'axios';
import users from '../placeholder_data/users.json';
import {GET_USERS, GET_USERS_FAILED, GET_CURRENT_USER, GET_CURRENT_USER_FAILED} from './types';
import usersReducer from '../reducers/usersReducer';

export const UsersContext = createContext();
export const UsersActions = createContext();

export const UsersProvider = (props) => {

    //initial state
    const initialState = {
        users: [],
        currentUsername: {},
        usersError: "",
        loadingUsers: true
    }

    //setup userReducer hook using usersReducer and the initial state declared above
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

    //gets the current user. this can be used when seeing a list of an individual users posts, as the posts request
    //only includes the userID, however by doing this request, you can pull the users information, such as name, username using the same
    //userID parameter used when getting a users posts
    //it seems as though this route takes a while and times out mostly, however it's a good example
    //to see how error handling with the global state works, where the function will catch the error
    //and run GET_CURRENT_USER_FAILED
    const getCurrentUser = async (userID) => {
        try {
            const result = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${userID}`)
            dispatch({
                type: GET_CURRENT_USER,
                payload: result.data
            })
        } catch(err) {
            dispatch({
                type: GET_CURRENT_USER_FAILED
            })
        }
    }

    //store all actions here and add to the value in the provider
    const actions = {
        getUsers,
        getCurrentUser
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

