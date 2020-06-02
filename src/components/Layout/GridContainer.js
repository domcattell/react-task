import React from 'react';
import styles from '../../styles/Layout/grid_container.module.scss';

const GridContainer = (props) => {
    return (
        <div className={styles.grid_container}>
            {props.children}
        </div>
    );
}

export default GridContainer;
