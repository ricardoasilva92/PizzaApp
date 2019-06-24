import React, { Component } from "react";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
	state = {
		showSideDrawer: true
	};

	render() {
		return (
			<div>
				<Toolbar />
				<SideDrawer
					open={this.state.showSideDrawer}
					closed={this.sideDrawerClosedHandler}
				/>
				Toolbar, SideDrawer, Backdrop
				<main className={styles.Content}>{this.props.children}</main>
			</div>
		);
	}

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};
}

export default Layout;
