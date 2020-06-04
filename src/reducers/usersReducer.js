import {GET_USERS, GET_USERS_FAILED, GET_CURRENT_USER, GET_CURRENT_USER_FAILED} from '../actions/types';

const reducer = (state, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            };
        
        //gets username for current users page that views their posts. uses array value 0
        //can then easily be used within the app without mapping the value
        case GET_CURRENT_USER:
            return {
                ...state,
                currentUsername: action.payload[0].username
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