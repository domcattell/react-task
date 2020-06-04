import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/NavigationBar/navbar.module.scss';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import { AuthActions, AuthContext } from '../../actions/auth.context';

const NavigationBar = () => {
	const { isAuthenticated, loggedInUser } = useContext(AuthContext);
	const { logout } = useContext(AuthActions);

	const handleLogout = (e) => {
		e.preventDefault();
		logout();
	};

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
			<Navbar.Brand href="/">Natural HR React Task</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="navbar">
				{isAuthenticated ? (
					<>
					<Nav className="mr-auto">
						<NavDropdown className="mr-auto" title={loggedInUser} id="collasible-nav-dropdown">
							<NavDropdown.Item >See My Posts</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
						</NavDropdown>
						</Nav>
						<Form inline>
							<FormControl type="text" placeholder="Search Posts ID" size="sm" className="mr-sm-2" />
							<Button variant="outline-light" size="sm">
								Search
							</Button>
						</Form>
					</>
				) : (
					<Nav className="ml-auto">
						<Nav.Link href="/login">Login</Nav.Link>
						<Nav.Link href="/register">Register</Nav.Link>
					</Nav>
				)}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavigationBar;
