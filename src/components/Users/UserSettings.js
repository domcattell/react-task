import React from 'react';
import { Container, Card, Accordion, Button, Form, Col } from 'react-bootstrap';
import CardContainer from '../Layout/CardContainer';

//dummy user account settings component. None of this
//is actually functional, however, it would follow the same
//pattern as the rest of the app, doing a put request
//whether it's changing the users password or accounts settings
const UserSettings = () => {
	return (
		<Container className="mt-4">
			<CardContainer>
				<Accordion>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant="link" eventKey="0">
								Change Password
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
							<Card.Body>
								<Form>
									<Form.Group>
										<Form.Label>New Password</Form.Label>
										<Form.Control
											type="password"
											name="password"
											placeholder="Enter A New Password"
											required
											minLength="6"
										/>
									</Form.Group>
									<Button type="submit">Change Password</Button>
								</Form>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant="link" eventKey="1">
								Change Account Details
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="1">
							<Card.Body>
								<Form>
									<Form.Row>
										<Form.Group as={Col} controlId="email">
											<Form.Label>Email</Form.Label>
											<Form.Control type="email" placeholder="Enter email" />
										</Form.Group>

										<Form.Group as={Col} controlId="name">
											<Form.Label>Name</Form.Label>
											<Form.Control type="password" placeholder="Password" />
										</Form.Group>
									</Form.Row>

									<Form.Group controlId="address">
										<Form.Label>Address</Form.Label>
										<Form.Control placeholder="1234 Main St" />
									</Form.Group>

									<Form.Group controlId="address2">
										<Form.Label>Address 2</Form.Label>
										<Form.Control placeholder="Apartment, studio, or floor" />
									</Form.Group>

									<Form.Row>
										<Form.Group as={Col} controlId="city">
											<Form.Label>City</Form.Label>
											<Form.Control placeholder="City"/>
										</Form.Group>

										<Form.Group as={Col} controlId="zip">
											<Form.Label>Zip</Form.Label>
											<Form.Control placeholder="ZIP Code" />
										</Form.Group>
									</Form.Row>

                                    <Form.Group controlId="company">
										<Form.Label>Company</Form.Label>
										<Form.Control placeholder="Current Company" />
									</Form.Group>

									<Button variant="primary" type="submit">
										Save Account Details
									</Button>
								</Form>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</CardContainer>
		</Container>
	);
};

export default UserSettings;
