import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/NavigationBar/navbar.module.scss';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';

const NavigationBar = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
			<Navbar.Brand href="/">React-Task</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/login">Login</Nav.Link>
					<Nav.Link href="/register">Register</Nav.Link>
					<NavDropdown title="Actions" id="collasible-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Form inline>
					<FormControl type="text" placeholder="Search Posts ID" size="sm" className="mr-sm-2" />
					<Button variant="outline-light" size="sm">Search</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavigationBar;
