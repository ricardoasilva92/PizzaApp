import React from "react";
import styles from './Layout.module.css'

console.log(styles);
const layout = props => (
	<div>
		Toolbar, SideDrawer, Backdrop
		<main className={styles.Content}>{props.children}</main>
	</div>
);

export default layout;
