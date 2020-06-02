import React from 'react';
import styles from '../../styles/Layout/centered_div.module.scss';

//very simple layout components with some css flex options set all child elements
//in the center of the page listed as a column
const CenteredDiv = (props) => {
    return (
        <div className={styles.centered_div}>
            {props.children}
        </div>
    );
}

export default CenteredDiv;
