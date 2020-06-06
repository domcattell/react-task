import React, { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { CommentsActions, CommentsContext } from '../../actions/comments.context';
import CommentCard from '../Comments/CommentCard';
import useToggle from '../../hooks/useToggle';
import Loading from '../Layout/Loading';
import AddComment from '../Modals/AddComment';
import Error from '../Layout/Error';
import styles from '../../styles/Comments/comments.module.scss';

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
	const { id } = props;
	const { getComments, clearComments, resetError } = useContext(CommentsActions);
	const { comments, loading, commentsError, commentsMsg } = useContext(CommentsContext);
	const [ addModal, toggleAddModal ] = useToggle(false);

	//get comments. on unmount, reset loading and comments message
	useEffect(
		() => {
			getComments(id);
			return () => {
				clearComments();
			};
		},
		[ getComments, clearComments, id ]
	);
	
	//loading and error components to manage state. These could potentially
	//be merged together into an all in once higher order component,
	//however, I feel this is sufficient enough for the app. A HOC to manage
	//these may work better something like Redux
	return (
		<div className={styles.comments}>
			<Loading isLoading={loading} title="Loading Comments" />
			<Error reset={resetError} error={commentsError} message={commentsMsg}/>
			<p className={styles.comments__header}>{comments.length} Comments</p>
			{comments.map((comment) => (
				<CommentCard
					key={comment.id}
					id={comment.id}
					name={comment.name}
					email={comment.email}
					body={comment.body}
				/>
			))}
			<Button className="mt-3" variant="success" onClick={toggleAddModal}>
				Add Comment
			</Button>
			{addModal && <AddComment show={addModal} onHide={toggleAddModal} />}
		</div>
	);
};

export default Comments;
