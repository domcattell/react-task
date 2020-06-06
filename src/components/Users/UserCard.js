import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CardContainer from '../Layout/CardContainer';
import styles from '../../styles/Users/user_card.module.scss';

//simple card view for displaying a user.
const UserCard = (props) => {
	//destructure props to make the JSX more readable
	const {id, phone, email, suite, street, city, zipcode, name, username, website, company} = props;
	return (
		<CardContainer>
			<div className={styles.user_card__details}>
				<div className={styles.user_card__avatar}>
					<i className="fas fa-user"></i>
				</div>
				<h5 className={styles.user_card__name}>{name}</h5>
				<p className={styles.user_card__username}>username: {username}</p>
				<p className={styles.user_card__website}>website: {website}</p>
			</div>

			<p className={styles.user_card__company}>Company: {company}</p>

			<div className={styles.user_card__address}>
				<p>Address</p>
				<ul>
					<li>Street: {street}</li>
					<li>suite: {suite}</li>
					<li>city: {city}</li>
					<li>zipcode: {zipcode}</li>
				</ul>
			</div>

			<div className={styles.user_card__contact}>
				<p className={styles.user_card__email}>{email}</p>
				<p className={styles.user_card__phone}>Contact: {phone}</p>
			</div>

			<div className={styles.user_card__controls}>
				<Link to={`/users/${id}/posts`}>
					<Button variant="outline-dark" size="sm">
						<i className="fas fa-comment-alt" />
						Posts
					</Button>
				</Link>
			</div>
		</CardContainer>
	);
};

export default UserCard;
