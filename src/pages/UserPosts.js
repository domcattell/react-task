import React, { useContext, useEffect } from 'react';
import { UsersActions, UsersContext } from '../actions/users.context';
import Header from '../components/Layout/Header';
import Posts from '../components/Posts/Posts';

const UserPosts = (props) => {
	const { getCurrentUser, clearUser } = useContext(UsersActions);
	const { currentUsername, loadingUser } = useContext(UsersContext);

	useEffect(() => {
		getCurrentUser(props.match.params.id)
		return () => {
			clearUser()
		}
	},[]);

	return (
		<div>
			<Header title={loadingUser ? `Loading username...` : `See what ${currentUsername} has posted`} />
			<Posts id={props.match.params.id}/>
		</div>
	);
};

export default UserPosts;
