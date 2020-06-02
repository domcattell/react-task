import React, {useContext, useEffect} from 'react';
import {PostsActions, PostsContext} from '../../actions/posts.context';
import CardContainer from '../Layout/CardContainer';
import Comment from '../Comments/Comment'
import styles from '../../styles/Comments/comments.module.scss';

const Comments = (props) => {
    const {getComments, clearComments} = useContext(PostsActions)
    const {comments} = useContext(PostsContext)

    useEffect(() => {
        //get comments
        getComments(props.id);
        //on dismount, cleanup comments in global state for current post
        return () => {
            clearComments();
        }
    },[props.id])
    
    return (
        <div>
            {comments.map(comment => (
                <Comment 
                    name={comment.name}
                    email={comment.email}
                    body={comment.body}
                />
            ))}
        </div>
    );
}

export default Comments;
