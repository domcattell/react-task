import React from 'react';
import styles from '../../styles/Posts/posts_card.module.scss';
import CardContainer from '../Layout/CardContainer';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const PostsCard = (props) => {
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
			</div>
		</CardContainer>
	);
};

export default PostsCard;
