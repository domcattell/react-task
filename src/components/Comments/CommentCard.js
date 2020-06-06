import React, { useContext } from 'react';
import { CommentsActions, CommentsContext } from '../../actions/comments.context';
import styles from '../../styles/Comments/comment.module.scss';
import EditComment from '../Modals/EditComment';
import DeleteComment from '../Modals/DeleteModal';
import useToggle from '../../hooks/useToggle';
import ActionsDropdown from '../Layout/ActionsDropdown';

/**
 * this component displays a comments data,
 * and opens two modals for editing and deleting a comment
 * They will only render if the boolean state is true, which is set at
 * the bottom of the return value. Without conditionally rendering them,
 * then the modals for every comment component would render on mount.
 */

const Comment = (props) => {
	const [ editModal, toggleEditModal ] = useToggle(false);
	const [ deleteModal, toggleDeleteModal ] = useToggle(false);
	const { deleteComment, commentActionProgress } = useContext(CommentsActions);
	const { inProgress } = useContext(CommentsContext);

	return (
		<div className={styles.comment}>
			<p className={styles.comment__email}>{props.email}</p>
			<p className={styles.comment__name}>{props.name}</p>
			<p className={styles.comment__body}>{props.body}</p>
			<div className={styles.comment__controls}>
				<ActionsDropdown editOnClick={toggleEditModal} deleteOnClick={toggleDeleteModal} type="Comment" />
			</div>
			{deleteModal && (
				<DeleteComment
					id={props.id}
					type="Comment"
					deleteFunction={deleteComment}
					name={props.name}
					show={deleteModal}
					onHide={toggleDeleteModal}
					inProgress={inProgress}
					progressFunction={commentActionProgress}
				/>
			)}
			{editModal && (
				<EditComment
					id={props.id}
					name={props.name}
					body={props.body}
					show={editModal}
					onHide={toggleEditModal}
				/>
			)}
		</div>
	);
};

export default Comment;
