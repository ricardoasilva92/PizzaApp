import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle'

const toolbar = props => (
	<header className={styles.Toolbar}>
		<DrawerToggle clicked={props.drawerToggleClicked}/>
		<Logo />
		<nav className={styles.DesktopOnly}>
			<NavigationItems/>
		</nav>
	</header>
);

export default toolbar;
