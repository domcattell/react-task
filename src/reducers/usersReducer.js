import {GET_USERS, GET_USERS_FAILED} from '../actions/types';

const reducer = (state, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            };
        
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