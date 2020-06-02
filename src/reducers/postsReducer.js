import {
	GET_POSTS,
	GET_USER_POSTS,
	GET_POSTS_FAILED,
	EDIT_POST,
	ADD_POST,
	DELETE_POST,
	GET_POST,
	GET_POST_FAILED,
	GET_COMMENTS,
	GET_COMMENTS_FAILED,
	CLEAR_POST,
	CLEAR_COMMENTS
} from '../actions/types';

const reducer = (state, action) => {
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
				posts: action.payload
			};

		case GET_USER_POSTS:
			return {
				...state,
				userPosts: action.payload
			};

		case GET_POSTS_FAILED:
			return {
				...state,
				postsError: 'Something went wrong getting the posts'
			};

		case GET_POST:
			return {
				...state,
				post: action.payload
			};

		case GET_POST_FAILED:
			return {
				...state,
				postsError: 'Something went wrong getting this post'
			};

		case GET_COMMENTS:
			return {
				...state,
				comments: action.payload
			}
		
		case GET_COMMENTS_FAILED:
			return {
				...state,
				postsError: 'Something went wrong getting the comments'
			}

		case CLEAR_POST:
			return {
				...state,
				post: {}
			}

		case CLEAR_COMMENTS:
			return {
				...state,
				comments: []
			}
			
		default:
			return state;
	}
};

export default reducer;
