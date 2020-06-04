import React, { useContext, useEffect } from 'react';
import { PostsActions, PostsContext } from '../actions/posts.context';
import { UsersActions, UsersContext } from '../actions/users.context';
import PostsCard from '../components/Posts/PostsCard';
import Header from '../components/Layout/Header';
import GridContainer from '../components/Layout/GridContainer';
import Loading from '../components/Layout/Loading';
import {toast} from 'react-toastify';

/**
 * This page component could be a cleaner, as mapping the users posts state
 * could broken up and done in another component, then that component
 * could be imported here, however, this component isn't too cluttered as is
 */

/**
 * 
 */

const UserPosts = (props) => {
	const { getUserPosts, clearUserPosts } = useContext(PostsActions);
	const { userPosts, loadingPosts, postsError } = useContext(PostsContext);
	const { getCurrentUser } = useContext(UsersActions);
	const { currentUsername } = useContext(UsersContext);

	useEffect(() => {
        getUserPosts(props.match.params.id);
		getCurrentUser(props.match.params.id)
		
		return () => {
			clearUserPosts();
		}
	},[]);
	
	return (
		<div>
			<Header title={loadingPosts ? `Loading username...` : `See what ${currentUsername} has posted`} />
			{loadingPosts ? <Loading title="Users Posts"/> :
				<GridContainer>{userPosts.map((post) => <PostsCard key={post.id} id={post.id} title={post.title} body={post.body} />)}</GridContainer>			
			}
		</div>
	);
};

export default UserPosts;
