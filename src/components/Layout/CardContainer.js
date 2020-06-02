import React from 'react';
import styles from '../../styles/Layout/card_container.module.scss';

const CardContainer = (props) => {
	return <div className={styles.card_container}>{props.children}</div>;
};

export default CardContainer;
