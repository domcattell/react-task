import React, { useContext } from 'react';
import Header from '../components/Layout/Header';
import { AuthContext } from '../actions/auth.context';
import { Button, Container } from 'react-bootstrap';
import Posts from '../components/Posts/Posts';
import CardContainer from '../components/Layout/CardContainer';
import UserSettings from '../components/Users/UserSettings'
import useToggle from '../hooks/useToggle';
import NewPost from '../components/Modals/NewPost';

const AccountSettings = () => {
    const { loggedInUser } = useContext(AuthContext);
    const [addPostModal, toggleAddPostModal] = useToggle(false);

	return (
		<div>
			<Header title={`Hi, ${loggedInUser}`} />
            <UserSettings />
			<Container className="mt-4">
				<CardContainer>
                    <Button onClick={toggleAddPostModal}>Add A New Post</Button>
					<Posts />
				</CardContainer>
			</Container>
            {addPostModal && <NewPost show={addPostModal} onHide={toggleAddPostModal}/> }
		</div>
	);
};

export default AccountSettings;
