import {
	GET_USER_POSTS,
	GET_POSTS_FAILED,
	EDIT_POST,
	EDIT_POST_FAILED,
	ADD_POST,
	ADD_POST_FAILED,
	DELETE_POST,
	DELETE_POST_FAILED,
	GET_POST,
	GET_POST_FAILED,
	CLEAR_POST,
	CLEAR_USERS_POSTS,
	ACTION_PROGRESS,
	RESET_ERROR
} from '../actions/types/types';

const reducer = (state, action) => {
	switch (action.type) {
		case GET_USER_POSTS:
			return {
				...state,
				loading: false,
				userPosts: action.payload,
				postsMsg: null,
				postsError: false
			};

		case GET_POSTS_FAILED:
			return {
				...state,
				loading: false,
				userPosts: [],
				postsMsg: 'Something went wrong getting the posts',
				postsError: true
			};

		case GET_POST:
			return {
				...state,
				loading: false,
				post: action.payload,
				postsMsg: null,
				postsError: false
			};

		case GET_POST_FAILED:
			return {
				...state,
				loading: false,
				post: {},
				postsMsg: 'Something went wrong getting this post',
				postsError: true
			};

		case ADD_POST:
			return {
				...state,
				userPosts: [ ...state.userPosts, action.payload ],
				inProgress: false,
				postsMsg: "Added post",
				postsError: false
			};

		case ADD_POST_FAILED:
			return {
				...state,
				inProgress: false,
				postsMsg: 'Something went wrong adding the post',
				postsError: true
			};

		case EDIT_POST:
			return {
				...state,
				userPosts: state.userPosts.map((post) => (post.id === action.payload.id ? action.payload : post)),
				inProgress: false,
				postsMsg: "Edited post successfully",
				postsError: false
			};

		case EDIT_POST_FAILED:
			return {
				...state,
				inProgress: false,
				postsMsg: 'Something went wrong editing the post',
				postsError: true
			};

		case DELETE_POST:
			return {
				...state,
				userPosts: state.userPosts.filter((post) => post.id !== action.payload),
				inProgress: false,
				postsMsg: "Deleted post",
				postsError: false
			};

		case DELETE_POST_FAILED:
			return {
				...state,
				inProgress: false,
				postsMsg: 'Something went wrong deleting the post',
				postsError: true
			};

		case CLEAR_POST:
			return {
				...state,
				loading: true,
				inProgress: false,
				postsMsg: null,
				postsError: false
			};

		case CLEAR_USERS_POSTS:
			return {
				...state,
				inProgress: false,
				loading: true,
				postsError: false
			};

		case RESET_ERROR:
			return {
				...state,
				postsError: false,
			};

		case ACTION_PROGRESS:
			return {
				...state,
				inProgress: true
			};

		default:
			return state;
	}
};

export default reducer;
