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
				usersMsg: '',
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
				usersMsg: '',
				usersError: false
			};

		case GET_CURRENT_USER_FAILED:
			return {
				...state,
				currentUsername: '',
				loadingUser: false,
				usersMsg: 'Error occured trying to find this user',
				usersError: true
			};

		case CLEAR_USER:
			return {
				...state,
				loadingUser: true,
				usersMsg: '',
				usersError: false
			};

		case CLEAR_USERS:
			return {
				...state,
				loadingUsers: true,
				usersMsg: '',
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
