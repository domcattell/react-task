import React from 'react';
import styles from '../../styles/Layout/page_container.module.scss';

//simple container with some basic css applied
const PageContainer = (props) => {
    return (
        <div className={styles.page_container}>
            {props.children}
        </div>
    );
}

export default PageContainer;
