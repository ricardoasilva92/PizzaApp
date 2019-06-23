import React from "react";
import styles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = props => (
	<div>
		<Toolbar/>
		<SideDrawer/>
		Toolbar, SideDrawer, Backdrop
		<main className={styles.Content}>{props.children}</main>
	</div>
);

export default layout;
