import React, { createContext, useReducer, useCallback } from 'react';
import {
	GET_USER_POSTS,
	ADD_POST,
	EDIT_POST,
	DELETE_POST,
	GET_POSTS_FAILED,
	GET_POST,
	GET_POST_FAILED,
	CLEAR_POST,
	CLEAR_USERS_POSTS,
	ADD_POST_FAILED,
	EDIT_POST_FAILED,
	DELETE_POST_FAILED,
	ACTION_PROGRESS,
	RESET_ERROR
} from './types/types';
import axios from 'axios';
import postsReducer from '../reducers/postsReducer';
import { BASE_API_URL } from './variables/api';

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

export const PostsProvider = (props) => {
	//set initial state
	const initialState = {
		post: {},
		userPosts: [],
		postsMsg: null,
		loading: true,
		inProgress: false,
		postsError: false
	};
	/** usually @postsMsg could be a response from the server, however
    * as the backend can't be controlled here, the message has been manually set in the reducer */

	//useReducer hook to use with imported reducer and initial state
	const [ state, dispatch ] = useReducer(postsReducer, initialState);

	//actions functions

	//get users posts
	const getUserPosts = useCallback(async(userID) => {
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
	},[])


	//get a specific post
	const getPost = useCallback(async(postID) => {
		try {
			const result = await axios.get(`${BASE_API_URL}posts/${postID}`);
			dispatch({
				type: GET_POST,
				payload: result.data
			});
		} catch (error) {
			dispatch({
				type: GET_POST_FAILED
			});
		}
	},[])

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
			await axios.delete(`${BASE_API_URL}posts/${postID}`);
			dispatch({
				type: DELETE_POST,
				payload: postID
			});
		} catch (error) {
			dispatch({
				type: DELETE_POST_FAILED
			});
		}
	};

	//clear actions for cleanup on components. resets global state, such as loading states.
	const clearPost = useCallback(() => {
		dispatch({
			type: CLEAR_POST
		});
	},[])

	const clearUserPosts = useCallback(() => {
		dispatch({ type: CLEAR_USERS_POSTS });
	},[])

	const postActionProgress = () => dispatch({ type: ACTION_PROGRESS });

	const resetError = useCallback(() => {
		dispatch({type: RESET_ERROR})
	},[])
	
	const actions = {
		getUserPosts,
		getPost,
		clearPost,
		clearUserPosts,
		addPost,
		editPost,
		deletePost,
		postActionProgress,
		resetError
	};

	return (
		<PostsContext.Provider value={state}>
			<PostsActions.Provider value={actions}>{props.children}</PostsActions.Provider>
		</PostsContext.Provider>
	);
};
