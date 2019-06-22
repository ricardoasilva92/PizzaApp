import React from 'react';
import styles from './BuildControl.module.css'

const buildControl = (props) => (
	<div className={styles.BuildControl}>
		<div>{props.label}</div>
		<button>Yes</button>
		<button>No</button>
	</div>
);

export default buildControl;