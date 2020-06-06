import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { AuthActions, AuthContext } from '../../actions/auth.context';
import useInput from '../../hooks/useInput';
import Error from '../Layout/Error';

const LoginForm = (props) => {
	const { location } = props;
	const { login } = useContext(AuthActions);
	const { authMsg, isAuthenticated } = useContext(AuthContext);
	const [ user, handleChange ] = useInput('');

	//login in the user
	const handleSubmit = (e) => {
		e.preventDefault();
		login(user);
	};

	//check if user is authenticated. if isAuthenticated changes,
	// rerender component and redirect to "/"
	useEffect(
		() => {
			isAuthenticated && location('/');
		},
		[ isAuthenticated, location ]
	);

	return (
		<Container className="mt-5">
			<Jumbotron className="shadow-sm bg-white rounded border border-light">
				<Row className="d-flex justify-content-lg-center">
					<Col>
						<Error error={!isAuthenticated} message={authMsg} />
						<Form onSubmit={handleSubmit}>
							<Form.Group controlId="username">
								<Form.Label>Username</Form.Label>
								<Form.Control
									type="text"
									name="username"
									value={user.username || ''}
									onChange={handleChange}
									placeholder="Enter Username"
									required
								/>
							</Form.Group>

							<Form.Group controlId="password">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									name="password"
									value={user.password || ''}
									onChange={handleChange}
									placeholder="Password"
									required
								/>
							</Form.Group>

							<Button variant="dark" type="submit">
								Login
							</Button>
						</Form>
						<p className="mt-4">
							Dont have an account? Create one <NavLink to="/register">here</NavLink>
						</p>
					</Col>
				</Row>
			</Jumbotron>
		</Container>
	);
};

export default LoginForm;
