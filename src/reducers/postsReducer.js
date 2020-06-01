import {GET_POSTS, GET_POSTS_FAILED, EDIT_POST, ADD_POST, DELETE_POST} from '../actions/types';

const reducer = (state, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        
        case GET_POSTS_FAILED:
            return {
                ...state,
                postsError: "Something went wrong getting the posts"
            }
            
        default: 
            return state
    }
}

export default reducer