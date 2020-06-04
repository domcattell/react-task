import React from 'react';
import styles from '../../styles/Layout/grid_container.module.scss';

//grid container with automatic responsiveness using auto-fit and minmax() in css
const GridContainer = (props) => {
    return (
        <div className={styles.grid_container}>
            {props.children}
        </div>
    );
}

export default GridContainer;
