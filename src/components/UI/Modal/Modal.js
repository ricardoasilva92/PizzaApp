import React from "react";
import styles from "./Modal.module.css";
import BackDrop from '../BackDrop/BackDrop'

const modal = props => (
	<div>
		<BackDrop show={props.show} clicked={props.clickedBackDrop}/>
	<div
		className={styles.Modal}
		style={{
			transform: props.show ? "translateY(0)" : "translate(-100vh",
			opacity: props.show ? "1" : "0"
		}}
	>
		{props.children}
	</div>
	</div>
);

export default modal;
