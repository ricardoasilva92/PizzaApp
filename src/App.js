import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Checkout from "./containers/Checkout/Checkout";
import PizzaBuilder from "./containers/PizzaBuilder/PizzaBuilder";

function App() {
	return (
		<div>
			<Layout>
				<Switch>
					<Route path="/checkout" component={Checkout} />
					<Route path="/" exact component={PizzaBuilder} />
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
