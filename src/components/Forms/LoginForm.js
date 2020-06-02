import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const LoginForm = () => {
	return (
		<Container>
			<Row className="d-flex justify-content-center">
				<Col lg={5}>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Username</Form.Label>
							<Form.Control type="text" placeholder="Enter Username" />
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>

						<Button variant="dark" type="submit">
							Login
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default LoginForm;
