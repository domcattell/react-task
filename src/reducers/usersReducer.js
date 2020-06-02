import {GET_USERS, GET_USERS_FAILED, GET_CURRENT_USER, GET_CURRENT_USER_FAILED} from '../actions/types';

const reducer = (state, action) => {
    switch(action.type) {
        //gets all users and fills in the users global state
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            };
        
        //gets current user and fills in the currnetUser global state.
        //pulls out the first array item as only one item(user) will be 
        //returned. This means it can be used as an object in components,
        //rather than an array that has to be mapped to get the value
        case GET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload[0]
            }

        case GET_CURRENT_USER_FAILED:
            return {
                ...state,
                usersError: "Error occured trying to find this user"
            }
        
        case GET_USERS_FAILED: 
            return {
                ...state,
                usersError: "Error occured trying to find users"
            }

        default:
            return state
    }
}

export default reducer;