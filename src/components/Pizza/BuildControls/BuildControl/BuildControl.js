import React from 'react';
import styles from './BuildControl.module.css'

const buildControl = (props) => (
	<div className={styles.BuildControl}>
		<div>{props.label}</div>
		<button onClick={props.addItem} className={styles.More}>Yes</button>
		<button className={styles.Less}>No</button>
	</div>
);

export default buildControl;