import React, { useContext } from 'react';
import { CommentsActions, CommentsContext } from '../../actions/comments.context';
import useToggle from '../../hooks/useToggle';
import EditComment from '../Modals/EditComment';
import DeleteComment from '../Modals/DeleteModal';
import ActionsDropdown from '../Layout/ActionsDropdown';
import styles from '../../styles/Comments/comment.module.scss';

/**
 * this component displays a comments data,
 * and opens two modals for editing and deleting a comment
 * They will only render if the boolean state is true, which is set at
 * the bottom of the return value. Without conditionally rendering them,
 * then the modals for every comment component would render on mount.
 */

const Comment = (props) => {
	const {name, email, body, id} = props;
	const [ editModal, toggleEditModal ] = useToggle(false);
	const [ deleteModal, toggleDeleteModal ] = useToggle(false);
	const { deleteComment, commentActionProgress, resetError } = useContext(CommentsActions);
	const { inProgress, commentsError, commentsMsg } = useContext(CommentsContext);

	return (
		<div className={styles.comment}>
			<p className={styles.comment__email}>{email}</p>
			<p className={styles.comment__name}>{name}</p>
			<p className={styles.comment__body}>{body}</p>
			<div className={styles.comment__controls}>
				<ActionsDropdown editOnClick={toggleEditModal} deleteOnClick={toggleDeleteModal} type="Comment" />
			</div>
			{deleteModal && (
				<DeleteComment
					id={id}
					type="Comment"
					deleteFunction={deleteComment}
					show={deleteModal}
					onHide={toggleDeleteModal}
					progressFunction={commentActionProgress}
					isLoading={inProgress}
					resetError={resetError}
					message={commentsMsg}
					error={commentsError}
				/>
			)}
			{editModal && (
				<EditComment
					id={id}
					name={name}
					body={body}
					email={email}
					show={editModal}
					onHide={toggleEditModal}
				/>
			)}
		</div>
	);
};

export default Comment;
