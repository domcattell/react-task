import React, { useContext } from 'react';
import { Form, Button, Container, Row, Col, Jumbotron, Alert } from 'react-bootstrap';
import { AuthActions, AuthContext } from '../../actions/auth.context';
import useInput from '../../hooks/useInput';

//use the react-bootstrap package here to speed up the markup
const LoginForm = (props) => {
	const { login } = useContext(AuthActions);
	const { authError, isAuthenticated } = useContext(AuthContext);
	const [ user, handleChange ] = useInput('');

	const handleSubmit = (e) => {
		e.preventDefault();
		login(user);
	};

	isAuthenticated && props.location("/")

	return (
		<Container className="mt-5">
			<Jumbotron className="shadow-sm bg-white rounded border border-light">
				<Row className="d-flex justify-content-lg-center">
					<Col>
						{authError && (
							<Alert variant="danger">
								{authError}
							</Alert>
						)}
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
					</Col>
				</Row>
			</Jumbotron>
		 </Container>
	);
};

export default LoginForm;
