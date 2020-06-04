import React, { useContext, useEffect } from 'react';
import { UsersActions, UsersContext } from '../actions/users.context';
import Header from '../components/Layout/Header';
import Posts from '../components/Posts/Posts';
import {toast} from 'react-toastify';

const UserPosts = (props) => {
	const { getCurrentUser, clearUser } = useContext(UsersActions);
	const { currentUsername, loadingUser } = useContext(UsersContext);

	useEffect(() => {
		getCurrentUser(props.match.params.id)
		return () => {
			clearUser()
		}
		console.log("i ran again")
	},[props.match.params.id]);
	console.log(loadingUser)
	return (
		<div>
			<Header title={loadingUser ? `Loading username...` : `See what ${currentUsername} has posted`} />
			<Posts id={props.match.params.id}/>
		</div>
	);
};

export default UserPosts;
