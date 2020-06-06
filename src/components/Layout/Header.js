import React from 'react';
import styles from '../../styles/Layout/header.module.scss';

//basic header component used on various pages on the app.
//uses props to display a page title
const Header = ({title}) => {
    return (
        <div className={styles.header}>
            <h5>{title}</h5>
        </div>
    );
}

export default Header;
