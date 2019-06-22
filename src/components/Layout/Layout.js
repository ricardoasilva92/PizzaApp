import React from "react";

const layout = props => (
	<div>
		Toolbar, SideDrawer, Backdrop
		<main>{props.children}</main>
	</div>
);

export default layout;
