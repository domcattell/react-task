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
    CLEAR_COMMENTS
} from '../actions/types';
import axios from 'axios';
import postsReducer from '../reducers/postsReducer';

/**
 * creates two seperate contexts using the contextAPI
 * postsContext will provide components with the global state
 * postsActions will provide components with requests
 */
export const PostsContext = createContext();
export const PostsActions = createContext();

export const PostsProvider = (props) => {
    /** usually @const postsError would be a response from the server, however
    * as there's no backend here, the state has been manually set in the reducer
    */
    const initialState = {
        posts: [],
        comments: [],
        post: {},
        loadingPosts: true,
        postsError: null,
        userPosts: []
    };

    const [state, dispatch] = useReducer(postsReducer, initialState);

    //get all posts
    const getPosts = async () => {
        try {
            const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
            dispatch({
                type: GET_POSTS,
                payload: result.data
            })
        } catch (err) {
            dispatch({
                type: GET_POSTS_FAILED,
            })
        }
    }

    //get users posts
    const getUserPosts = async (userID) => {
        try {
            const result = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
            dispatch({
                type: GET_USER_POSTS,
                payload: result.data
            })
        } catch (error) {
            dispatch({
                GET_POSTS_FAILED
            })
        }
    }

    //get a specific post
    const getPost = async (postID) => {
        try {
            const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`)
            dispatch({
                type: GET_POST,
                payload: result.data
            })
        } catch(error) {
            dispatch({
                type: GET_POSTS_FAILED,
            })
        }
    }

    const getComments = async (postID) => {
        try {
            const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
            dispatch({
                type: GET_COMMENTS,
                payload: result.data
            })
        } catch (error) {
            dispatch({
                type: GET_COMMENTS_FAILED,
            })
        }
    }

    const clearPost = () => {
        dispatch({
            type: CLEAR_POST
        })
    }

    const clearComments = () => {
        dispatch({
            type: CLEAR_COMMENTS
        })
    }

    const actions = {
        getPosts,
        getUserPosts,
        getPost,
        getComments,
        clearPost,
        clearComments
    }

    return (
        <PostsContext.Provider value={state}>
            <PostsActions.Provider value={actions}>
                {props.children}
            </PostsActions.Provider>
        </PostsContext.Provider>
    )
}


