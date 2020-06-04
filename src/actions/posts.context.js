import React, { createContext, useReducer } from 'react';
import {
	GET_POSTS,
	GET_USER_POSTS,
	ADD_POST,
	EDIT_POST,
	DELETE_POST,
	GET_POSTS_FAILED,
	GET_POST,
	GET_POST_FAILED,
	GET_COMMENTS,
	GET_COMMENTS_FAILED,
	CLEAR_POST,
	CLEAR_COMMENTS,
	CLEAR_USERS_POSTS,
	ADD_POST_FAILED,
	EDIT_POST_FAILED,
	DELETE_POST_FAILED,
	EDIT_COMMENT,
	EDIT_COMMENT_FAILED,
	DELETE_COMMENT,
	DELETE_COMMENT_FAILED,
	ADD_COMMENT,
	ADD_COMMENT_FAILED
} from '../actions/types';
import axios from 'axios';
import postsReducer from '../reducers/postsReducer';

/**
 * Uses the context API here for global state.
 * has the initial global state, along with the actions, which can then be
 * passed into other components in the app provided they have been wrapped
 * with the context provider. @userPosts global state was added here instead
 * of the users context to keep everything to do with posts in the app in one
 * centralised place, however, it could easily be added in the users context
 */

/**
 * @postsContext @postsActions
 * creates two seperate contexts using the contextAPI
 * postsContext will provide components with the state
 * postsActions will provide components with actions
 */
export const PostsContext = createContext();
export const PostsActions = createContext();

const BASE_API_URL = "https://jsonplaceholder.typicode.com/"

export const PostsProvider = (props) => {
	const initialState = {
		comments: [],
		post: {},
		userPosts: [],
		postsError: null,
		commentError: null,
		loadingPost: true,
		loadingUserPosts: true,
		loadingComments: true
	};
	/** usually @postsError could be a response from the server, however
    * as the backend can't be controlled here, the error message has been manually set in the reducer */

	const [ state, dispatch ] = useReducer(postsReducer, initialState);

	//get users posts
	const getUserPosts = async (userID) => {
		try {
			const result = await axios.get(`${BASE_API_URL}posts?userId=${userID}`);
			dispatch({
				type: GET_USER_POSTS,
				payload: result.data
			});
		} catch (error) {
			dispatch({
				GET_POSTS_FAILED
			});
		}
	};

	//get a specific post
	const getPost = async (postID) => {
		try {
			const result = await axios.get(`${BASE_API_URL}posts/${postID}`);
			dispatch({
				type: GET_POST,
				payload: result.data
			});
		} catch (error) {
			dispatch({
				type: GET_POSTS_FAILED
			});
		}
	};

	//get comments for a post
	const getComments = async (postID) => {
		try {
			const result = await axios.get(`${BASE_API_URL}posts/${postID}/comments`);
			dispatch({
				type: GET_COMMENTS,
				payload: result.data
			});
		} catch (error) {
			dispatch({
				type: GET_COMMENTS_FAILED
			});
		}
	};

	// add a new post
	const addPost = async (post) => {
		try {
			const result = await axios.post(`${BASE_API_URL}posts`, post);
			dispatch({
				type: ADD_POST,
				payload: result.data
			});
		} catch (err) {
			dispatch({
				type: ADD_POST_FAILED
			});
		}
	};

	//edit a new post
	const editPost = async (post, postID) => {
		try {
			const result = await axios.put(`${BASE_API_URL}posts/${postID}`, post);
			dispatch({
				type: EDIT_POST,
				payload: result.data
			});
		} catch (error) {
			dispatch({
				type: EDIT_POST_FAILED
			});
		}
	};

	//delete a post
	const deletePost = async (postID) => {
		try {
			const result = await axios.delete(`${BASE_API_URL}posts/${postID}`);
			dispatch({
				type: DELETE_POST,
				payload: result.data
			});
		} catch (error) {
			dispatch({
				type: DELETE_POST_FAILED
			});
		}
	};

	//add a comment
	const addComment = async (comment) => {
		try {
			const result = await axios.post(`${BASE_API_URL}comments/`, comment)
			dispatch({
				type: ADD_COMMENT,
				payload: result.data
			})
		} catch(error) {
			dispatch({
				type: ADD_COMMENT_FAILED,
			})
		}
	}

	//edit a comment
	const editComment = async (comment, commentID) => {
		try {
			const result = await axios.put(`${BASE_API_URL}comments/${commentID}`, comment)
			dispatch({
				type: EDIT_COMMENT,
				payload: result.data
			})
		} catch(error) {
			dispatch({
				type: EDIT_COMMENT_FAILED,
			})
		}
	}

	//delete a comment
	const deleteComment = async (commentID) => {
		try {
			await axios.delete(`${BASE_API_URL}comments/${commentID}`)
			dispatch({
				type: DELETE_COMMENT,
				payload: commentID
			})
		} catch (error) {
			dispatch({
				type: DELETE_COMMENT_FAILED,
			})
		}
	}

	//clear actions for cleanup on components. resets global state, such as loading states.
	const clearPost = () => {
		dispatch({
			type: CLEAR_POST
		});
	};

	const clearComments = () => {
		dispatch({
			type: CLEAR_COMMENTS
		});
	};

	const clearUserPosts = () => {
		dispatch({
			type: CLEAR_USERS_POSTS
		});
	};

	const actions = {
		getUserPosts,
		getPost,
		getComments,
		clearPost,
		clearComments,
		clearUserPosts,
		addPost,
		editPost,
		deletePost,
		editComment,
		deleteComment,
		addComment
	};

	return (
		<PostsContext.Provider value={state}>
			<PostsActions.Provider value={actions}>{props.children}</PostsActions.Provider>
		</PostsContext.Provider>
	);
};
