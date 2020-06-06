import {
	GET_USERS,
	CLEAR_USERS,
	CLEAR_USER,
	GET_USERS_FAILED,
	GET_CURRENT_USER,
	GET_CURRENT_USER_FAILED,
	RESET_ERROR
} from '../actions/types/types';

const reducer = (state, action) => {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				users: action.payload,
				loadingUsers: false,
				usersMsg: null,
				usersError: false
			};

		case GET_USERS_FAILED:
			return {
				...state,
				users: [],
				loadingUsers: false,
				usersMsg: 'Error occured trying to find users',
				usersError: true
			};

		//gets username for current users page that views their posts. uses array value 0
		//can then easily be used within the app without mapping the value
		case GET_CURRENT_USER:
			return {
				...state,
				currentUsername: action.payload[0].username,
				loadingUser: false,
				usersMsg: null,
				usersError: false
			};

		case GET_CURRENT_USER_FAILED:
			return {
				...state,
				currentUsername: null,
				loadingUser: false,
				usersMsg: 'Error occured trying to find this user',
				usersError: true
			};

		//user and usersPost will never clash, so on clear, both loadingUser and loadingUsers can
		//be cleared together
		case CLEAR_USERS:
		case CLEAR_USER:
			return {
				...state,
				loadingUser: true,
				loadingUsers: true,
				usersMsg: null,
				usersError: false
			};
		
		case RESET_ERROR:
			return {
				...state,
				usersError: false
			}

		default:
			return state;
	}
};

export default reducer;
