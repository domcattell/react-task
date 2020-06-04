import { GET_USERS, CLEAR_USERS, CLEAR_USER, GET_USERS_FAILED, GET_CURRENT_USER, GET_CURRENT_USER_FAILED } from '../actions/types';

const reducer = (state, action) => {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				users: action.payload,
                loadingUsers: false,
                usersError: ""
			};

		case GET_USERS_FAILED:
			return {
				...state,
                users: [],
                loadingUsers: false,
				usersError: 'Error occured trying to find users'
            };
            
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loadingUsers: true,
                usersError: ""
            }

		//gets username for current users page that views their posts. uses array value 0
		//can then easily be used within the app without mapping the value
		case GET_CURRENT_USER:
			return {
				...state,
				currentUsername: action.payload[0].username,
                loadingUser: false,
                usersError: ""
			};

		case GET_CURRENT_USER_FAILED:
			return {
				...state,
                currentUsername: "",
                loadingUser: false,
				usersError: 'Error occured trying to find this user'
            };
            
        case CLEAR_USER:
            return {
                ...state,
                currentUsername: "",
                loadingUser: true,
                usersError: "",
            }

		default:
			return state;
	}
};

export default reducer;
