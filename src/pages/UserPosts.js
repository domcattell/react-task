import React, { useContext, useEffect } from 'react';
import { UsersActions, UsersContext } from '../actions/users.context';
import Header from '../components/Layout/Header';
import Posts from '../components/Posts/Posts';

//renders Posts component displaying a list of users posts
const UserPosts = (props) => {
	const {id} = props.match.params;
	//grabs global state and actions
	const { getCurrentUser, clearUser } = useContext(UsersActions);
	const { currentUsername, loadingUser } = useContext(UsersContext);
	
	//gets currently viewed user's username to display in Header component
	//resets loading and user message state on dismount 
	useEffect(() => {
		getCurrentUser(id)
		return () => {
			clearUser()
		}
	},[getCurrentUser, id, clearUser]);

	//if current username does not exist, send a message saying user not found
	//else show the users username
	const user = () => {
		if(!currentUsername) {
			return <Header title="Username not found!"/>
		} else {
			return <Header title={loadingUser ? `Loading username...` : `See what ${currentUsername} has posted`} />
		}
	}
	return (
		<div>
			{user()}
			<Posts id={id}/>
		</div>
	);
};

export default UserPosts;
