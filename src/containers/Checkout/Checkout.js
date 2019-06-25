import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
	state={
		ingredients: {
			sauce: false,
			cheese: false,
			pepperoni: false,
			olive: false,
			mushroom: false
		}
	}
	render() {
		return (
			<div>
				<CheckoutSummary ingredients={this.state.ingredients}/>
			</div>
		);
	}
}

export default Checkout;
