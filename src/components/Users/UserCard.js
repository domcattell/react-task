import React from 'react';
import styles from '../../styles/Users/user_card.module.scss';
import { Link } from 'react-router-dom';
import CardContainer from '../Layout/CardContainer';
import { Button } from 'react-bootstrap';

const UserCard = (props) => {
	return (
		<CardContainer>
			<div className={styles.user_card__details}>
				<div className={styles.user_card__avatar}>
					<i class="fas fa-user"></i>
				</div>
				<h5 className={styles.user_card__name}>{props.name}</h5>
				<p className={styles.user_card__username}>username: {props.username}</p>
				<p className={styles.user_card__website}>website: {props.website}</p>
			</div>

			<p className={styles.user_card__company}>Company: {props.company}</p>

			<div className={styles.user_card__address}>
				<p>Address</p>
				<ul>
					<li>Street: {props.street}</li>
					<li>suite: {props.suite}</li>
					<li>city: {props.city}</li>
					<li>zipcode: {props.zipcode}</li>
				</ul>
			</div>

			<div className={styles.user_card__contact}>
				<p className={styles.user_card__email}>{props.email}</p>
				<p className={styles.user_card__phone}>Contact: {props.phone}</p>
			</div>

			<div className={styles.user_card__controls}>
				<Link to={`/users/${props.id}/posts`}>
					<Button variant="outline-dark" size="sm">
						<i className="fas fa-comment-alt" />
						Posts
					</Button>
				</Link>
				<Link>
					<Button variant="outline-dark" size="sm">
						<i className="fas fa-images" />Albums
					</Button>
				</Link>
			</div>
		</CardContainer>
	);
};

export default UserCard;
