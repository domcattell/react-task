import React, { useContext, useEffect, useState } from 'react';
import { PostsActions, PostsContext } from '../../actions/posts.context';
import Comment from '../Comments/Comment';
import Loading from '../Layout/Loading';
import styles from '../../styles/Comments/comments.module.scss'
import AddComment from '../Comments/AddComment';

/**
 * simple components for fetching all comments for a post.
 * firstly gets what needed from globalstate using the context hook
 * gets comments with @getComments using props.id as the param based from
 * the parent component. @commentsLoading is set to true in global state,
 * once the async function @getComments has done finished, it will set
 * @commentsLoading to false whether to request failed or succeeded.
 * @clearComments will remove the comments from global state and reset 
 * @commentsLoading to true again.
 */

const Comments = (props) => {
	const { getComments, clearComments } = useContext(PostsActions);
	const { comments, loadingComments } = useContext(PostsContext);

	const [commentsAmount, setCommentsAmount] = useState("");

	useEffect(
		() => {
			getComments(props.id);
			return () => {
				clearComments();
			};
		},
		[props.id]
	);

	//update commentsAmount state when comments.length changes
	useEffect(() => {
		setCommentsAmount(comments.length)
	},[comments.length])

    //will return the loading component and show a loading animation if commentsLoading
    //is false. Using a ternary operator here as explicitly writing "if(commentsLoading)..."
    //will make the return statement harder to read.
	return (
		<div>
			{loadingComments ? (
				<Loading title="comments"/>
			) : (
				<div className={styles.comments}>
				<p className={styles.comments__header}>{commentsAmount} Comments</p>
                {comments.map((comment) => 
                <Comment
					key={comment.id}
					id={comment.id}
                    name={comment.name} 
                    email={comment.email} 
                    body={comment.body} 
                />)}
				<AddComment />
				</div>
			)}
		</div>
	);
};

export default Comments;
