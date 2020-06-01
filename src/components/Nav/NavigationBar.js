import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/NavigationBar/navbar.module.scss';
import {Dropdown} from 'react-bootstrap';

const NavigationBar = () => {
	return (
		<nav className={styles.nav}>
			<h2 className={styles.nav__logo}>React Task</h2>
			<ul className={styles.nav__menu}>
				<li className={styles.nav__item}>
					<NavLink className={styles.nav__link} to="/login">
						Log in
					</NavLink>
				</li>
				<li className={styles.nav__item}>
					<NavLink className={styles.nav__link} to="/register">
						Register
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavigationBar;
