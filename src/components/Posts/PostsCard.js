import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PostsActions, PostsContext } from '../../actions/posts.context';
import useToggle from '../../hooks/useToggle';
import CardContainer from '../Layout/CardContainer';
import DeleteModal from '../Modals/DeleteModal';
import EditModal from '../Modals/EditPost';
import ActionsDropdown from '../Layout/ActionsDropdown';
import styles from '../../styles/Posts/posts_card.module.scss';

//shows a post as a card view. displays delete modal and edit modal
//based on local state using useToggle hook.
const PostsCard = (props) => {
	//state and actions from global state
	const { postActionProgress, deletePost } = useContext(PostsActions);
	const { inProgress } = useContext(PostsContext);
	//controls the view of edit and delete modals. They will only
	//render if the boolean(s) are true.
	const [ deleteModal, toggleDeleteModal ] = useToggle(false);
	const [ editModal, toggleEditModal ] = useToggle(false);

	return (
		<CardContainer>
			<div>
				<h4 className={styles.posts_card__title}>{props.title}</h4>
			</div>
			<div>
				<p className={styles.posts_card__body}>{props.body}</p>
			</div>
			<div className={styles.posts_card__controls}>
				<Link to={`/posts/${props.id}`}>
					<Button variant="outline-dark" size="sm">
						<i className="fas fa-comments" /> Comments
					</Button>
				</Link>
				<ActionsDropdown editOnClick={toggleEditModal} deleteOnClick={toggleDeleteModal} type="Post" />
			</div>
			{deleteModal && (
				<DeleteModal
					type="Post"
					show={deleteModal}
					onHide={toggleDeleteModal}
					progressFunction={postActionProgress}
					inProgress={inProgress}
					deleteFunction={deletePost}
					id={props.id}
				/>
			)}
			{editModal && (
				<EditModal
					show={editModal}
					id={props.id}
					onHide={toggleEditModal}
					title={props.title}
					body={props.body}
				/>
			)}
		</CardContainer>
	);
};

export default PostsCard;
