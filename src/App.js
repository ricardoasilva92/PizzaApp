import React from "react";
import Layout from "./components/Layout/Layout";
import Pizza from "./containers/PizzaBuilder/PizzaBuilder";

function App() {
	return (
		<div>
			<Layout>
				<Pizza />
			</Layout>
		</div>
	);
}

export default App;
