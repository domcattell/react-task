import React, { createContext, useReducer } from 'react';
import {
    GET_POSTS,
    GET_COMMENTS,
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
    GET_POSTS_FAILED
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
    * as there's no backend here, the state has been manually set from the reducer
    */
    const initialState = {
        posts: [],
        loadingPosts: true,
        postsError: null
    };

    const [state, dispatch] = useReducer(postsReducer, initialState);

    //get posts action
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

    const actions = {
        getPosts
    }

    return (
        <PostsContext.Provider value={state}>
            <PostsActions.Provider value={actions}>
                {props.children}
            </PostsActions.Provider>
        </PostsContext.Provider>
    )
}


