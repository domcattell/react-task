import {
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
	CLEAR_COMMENTS,
	CLEAR_USERS_POSTS,
	ADD_COMMENT,
	ADD_COMMENT_FAILED,
	EDIT_COMMENT,
	EDIT_COMMENT_FAILED,
	DELETE_COMMENT,
	DELETE_COMMENT_FAILED
} from '../actions/types';

const reducer = (state, action) => {
	switch (action.type) {
		case GET_USER_POSTS:
			return {
				...state,
				loadingUserPosts: false,
				userPosts: action.payload
			};

		case GET_POSTS_FAILED:
			return {
				...state,
				loadingUserPosts: false,
				userPosts: [],
				postsError: 'Something went wrong getting the posts'
			};

		case GET_POST:
			return {
				...state,
				loadingPost: false,
				post: action.payload
			};

		case GET_POST_FAILED:
			return {
				...state,
				loadingPost: false,
				post: {},
				postsError: 'Something went wrong getting this post'
			};

		case GET_COMMENTS:
			return {
				...state,
				loadingComments: false,
				comments: action.payload
			};

		case GET_COMMENTS_FAILED:
			return {
				...state,
				loadingComments: false,
				comments: [],
				postsError: 'Something went wrong getting the comments'
			};

		case CLEAR_POST:
			return {
				...state,
				post: {},
				loadingPost: true
			};

		case EDIT_COMMENT:
			return {
				...state,
				comments: state.comments.map((comment) => (comment.id === action.payload.id ? action.payload : comment))
			};

		case ADD_COMMENT:
			return {
				...state,
				comments: [...state.comments, action.payload]
			}

		case ADD_COMMENT_FAILED:
			return {
				...state,
				commentError: "Error ocurred adding the comment"
			}

		case EDIT_COMMENT_FAILED:
			return {
				...state,
				commentError: "Error ocurred updating the comment"
			}

		case DELETE_COMMENT:
			return {
				...state,
				comments: state.comments.filter(comment => comment.id !== action.payload)
			}

		case CLEAR_COMMENTS:
			return {
				...state,
				comments: [],
				loadingComments: true
			};

		case CLEAR_USERS_POSTS:
			return {
				...state,
				userPosts: [],
				loadingUserPosts: true
			};

		default:
			return state;
	}
};

export default reducer;
