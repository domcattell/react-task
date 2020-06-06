import {
	GET_COMMENTS,
	GET_COMMENTS_FAILED,
	EDIT_COMMENT,
	EDIT_COMMENT_FAILED,
	DELETE_COMMENT,
	DELETE_COMMENT_FAILED,
	ADD_COMMENT,
	ADD_COMMENT_FAILED,
    CLEAR_COMMENTS,
	ACTION_PROGRESS,
	RESET_ERROR
} from '../actions/types/types';

const reducer = (state, action) => {
	switch (action.type) {
		case GET_COMMENTS:
			return {
				...state,
				loading: false,
				comments: action.payload,
				commentsMsg: "",
				commentsError: false
			};

		case GET_COMMENTS_FAILED:
			return {
				...state,
				loading: false,
				comments: [],
				commentsMsg: "Something went wrong getting the comments",
				commentsError: true
			};

		case ADD_COMMENT:
			return {
				...state,
				comments: [ ...state.comments, action.payload ],
				commentsMsg: "Comment added",
				inProgress: false,
				commentsError: false
			};

		case ADD_COMMENT_FAILED:
			return {
				...state,
                inProgress: false,
				commentsMsg: "Error ocurred adding the comment",
				commentsError: true
			};

		case EDIT_COMMENT:
			return {
				...state,
				comments: state.comments.map((comment) => (comment.id === action.payload.id ? action.payload : comment)),
				commentsMsg: "Comment successfully edited",
				inProgress: false,
				commentsError: false
			};

		case EDIT_COMMENT_FAILED:
			return {
				...state,
                commentsMsg: "Error ocurred updating the comment",
				inProgress: false,
				commentsError: true
			};

		case DELETE_COMMENT:
			return {
				...state,
				comments: state.comments.filter((comment) => comment.id !== action.payload),
				commentsMsg: "Deleted comment",
				inProgress: false,
				commentsError: false
			};

		case DELETE_COMMENT_FAILED:
			return {
				...state,
				commentsMsg: "Error deleting comment",
				inProgress: false,
				commentsError: true
			}

		case CLEAR_COMMENTS:
			return {
				...state,
                loadingComments: true,
				inProgress: false,
				commentsMsg: null,
				commentsError: false
			};

		case RESET_ERROR:
			return {
				...state,
				commentsError: false
			}

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
