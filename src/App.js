import React from "react";
import Layout from "./components/Layout/Layout";
import Pizza from "./containers/PizzaBuilder/PizzaBuilder";
import Checkout from './containers/Checkout/Checkout'

function App() {
	return (
		<div>
			<Layout>
				<Pizza />
				<Checkout/>
			</Layout>
		</div>
	);
}

export default App;
