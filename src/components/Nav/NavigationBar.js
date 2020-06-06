import React, { useContext } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button, Form } from 'react-bootstrap';
import { AuthActions, AuthContext } from '../../actions/auth.context';
import useInput from '../../hooks/useInput';

//bootstrapped navbar. conditionally shows different information.
//if user not signed, show login and register links, else show
//users dropdown controls
const NavigationBar = (props) => {
	//state and actions from context
	const { isAuthenticated, loggedInUser } = useContext(AuthContext);
	const { logout } = useContext(AuthActions);
	const [search, handleChange] = useInput("");

	//logs the user out
	const handleLogout = (e) => {
		e.preventDefault();
		logout();
	};
	
	//very simple search function allowing the user to search for a post id
	const handleSearch = (e) => {
		e.preventDefault();
		props.history.push(`/posts/${search.searchParam}`)
	}
	
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
			<Navbar.Brand as={NavLink} to="/">Natural HR React Task</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="navbar">
				{isAuthenticated ? (
					<>
					<Nav className="mr-auto">
						<NavDropdown className="mr-auto" title={loggedInUser} id="collasible-nav-dropdown">
							<NavDropdown.Item as={NavLink} to="/users/myaccount">My Account</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
						</NavDropdown>
						</Nav>
						<Form inline onSubmit={handleSearch}>
							<Form.Control type="text" name="searchParam" value={search.searchParam || ""} onChange={handleChange} placeholder="Search Posts ID" size="sm" className="mr-sm-2" />
							<Button type="submit" variant="outline-light" size="sm">
								Search
							</Button>
						</Form>
					</>
				) : (
					<Nav className="ml-auto">
						<Nav.Link as={NavLink} to="/login">Login</Nav.Link>
						<Nav.Link as={NavLink} to="/register">Register</Nav.Link>
					</Nav>
				)}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default withRouter(NavigationBar);
