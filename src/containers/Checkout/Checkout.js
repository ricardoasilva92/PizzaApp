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

	checkoutCancelledHandler = () => {
		this.props.history.goBack();
	}

	checkoutConfirmedHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	}

	render() {
		return (
			<div>
				<CheckoutSummary ingredients={this.state.ingredients}
				checkoutCancelled={this.checkoutCancelledHandler}
				checkoutConfirmed={this.checkoutConfirmedHandler}/>
			</div>
		);
	}
}

export default Checkout;
