import React, { useContext, useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';
import { CommentsActions, CommentsContext } from '../../actions/comments.context';
import CommentCard from '../Comments/CommentCard';
import Loading from '../Layout/Loading';
import styles from '../../styles/Comments/comments.module.scss'
import AddComment from '../Modals/AddComment';
import useToggle from '../../hooks/useToggle';

/**
 * component for fetching all comments for a post.
 * firstly gets what needed from globalstate using the context hook
 * gets comments with @getComments using props.id as the param based from
 * the parent component. @commentsLoading is set to true in global state,
 * once the async function @getComments has done finished, it will set
 * @commentsLoading to false whether to request failed or succeeded.
 * @clearComments will remove the comments from global state and reset 
 * @commentsLoading to true again.
 */

const Comments = (props) => {
	const { getComments, clearComments } = useContext(CommentsActions);
	const { comments, loading } = useContext(CommentsContext);
	const [commentsAmount, setCommentsAmount] = useState("");
	const [addModal, toggleAddModal] = useToggle(false)

	useEffect(
		() => {
			getComments(props.id);
			return () => {
				clearComments();
			};
		},
		[]
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
			{loading ? (
				<Loading title="comments"/>
			) : (
				<div className={styles.comments}>
				<p className={styles.comments__header}>{commentsAmount} Comments</p>
                {comments.map((comment) => 
                <CommentCard
					key={comment.id}
					id={comment.id}
                    name={comment.name} 
                    email={comment.email} 
                    body={comment.body} 
                />)}
				<Button className="mt-3" variant="success" onClick={toggleAddModal}>Add Comment</Button>
				{addModal && <AddComment show={addModal} onHide={toggleAddModal} />}
				</div>
			)}
		</div>
	);
};

export default Comments;
