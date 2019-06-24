import React, { Component } from "react";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
	state = {
		showSideDrawer: false
	};

	render() {
		return (
			<div>
				<Toolbar drawerToggleClicked={this.drawerToggleHandler} />
				<SideDrawer
					open={this.state.showSideDrawer}
					closed={this.sideDrawerClosedHandler}
				/>
				Toolbar, SideDrawer, Backdrop
				<main className={styles.Content}>{this.props.children}</main>
			</div>
		);
	}

	drawerToggleHandler = () => {
		this.setState(prevState => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};
}

export default Layout;
