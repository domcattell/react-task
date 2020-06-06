import React from 'react';
import { Form, Button, Container, Row, Col, Jumbotron } from 'react-bootstrap';

//dummy component that doesn't actually do anything, however,
//it would follow the same pattern as the rest of the app,
//sending a post request to the api to create an account
const RegisterForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

	return (
		<Container className="mt-5">
			<Jumbotron className="shadow-sm bg-white rounded border border-light">
				<Row className="d-flex justify-content-lg-center">
					<Col>
						<Form onSubmit={handleSubmit}>
							<Form.Group controlId="username">
								<Form.Label>Username</Form.Label>
								<Form.Control
									type="text"
									name="username"
                                    placeholder="Enter Username"
                                    required
								/>
							</Form.Group>

                            <Form.Group controlId="username">
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="email"
									name="email"
                                    placeholder="Enter Email"
                                    required
								/>
							</Form.Group>

							<Form.Group controlId="password">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									name="password"
                                    placeholder="Password"
									required
									minLength="6"
								/>
							</Form.Group>

							<Button variant="dark" type="submit">
								Register
							</Button>
						</Form>
					</Col>
				</Row>
			</Jumbotron>
		 </Container>
	);
};

export default RegisterForm;