import React, { createContext, useReducer } from 'react';
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
} from './types/types';
import { BASE_API_URL } from './variables/api';
import axios from 'axios';
import commentsReducer from '../reducers/commentsReducer';

export const CommentsContext = createContext();
export const CommentsActions = createContext();

export const CommentsProvider = (props) => {
	const initialState = {
		comments: [],
		loading: true,
		CommentsMsg: 'null',
		inProgress: false,
		commentsError: false,
	};

	const [ state, dispatch ] = useReducer(commentsReducer, initialState);

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

	//add a comment
	const addComment = async (comment) => {
		try {
			const result = await axios.post(`${BASE_API_URL}comments/`, comment);
			dispatch({
				type: ADD_COMMENT,
				payload: result.data
			});
		} catch (error) {
			dispatch({
				type: ADD_COMMENT_FAILED
			});
		}
	};

	//edit a comment
	const editComment = async (comment, commentID) => {
		try {
			const result = await axios.put(`${BASE_API_URL}comments/${commentID}`, comment);
			dispatch({
				type: EDIT_COMMENT,
				payload: result.data
			});
		} catch (error) {
			dispatch({
				type: EDIT_COMMENT_FAILED
			});
		}
	};

	//delete a comment
	const deleteComment = async (commentID) => {
		try {
			await axios.delete(`${BASE_API_URL}comments/${commentID}`);
			dispatch({
				type: DELETE_COMMENT,
				payload: commentID
			});
		} catch (error) {
			dispatch({
				type: DELETE_COMMENT_FAILED
			});
		}
	};

	//resets comments state, such as loading, inProgress
	const clearComments = () => dispatch({ type: CLEAR_COMMENTS });

	//sets inProgress to true. used when adding, deleting and editing a comment
	//this could also just be a piece of the local state in components but I opted
	//to keep all actions in one place
	const commentActionProgress = () => dispatch({ type: ACTION_PROGRESS });

	const resetError = () => dispatch({type: RESET_ERROR})

	const actions = {
		getComments,
		addComment,
		editComment,
		deleteComment,
		clearComments,
		commentActionProgress,
		resetError
	};

	return (
		<CommentsContext.Provider value={state}>
			<CommentsActions.Provider value={actions}>{props.children}</CommentsActions.Provider>
		</CommentsContext.Provider>
	);
};
