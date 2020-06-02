import React from 'react';
import styles from '../../styles/Layout/header.module.scss';

const Header = (props) => {
    return (
        <div className={styles.header}>
            <h5>{props.title}</h5>
        </div>
    );
}

export default Header;
