import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
	state = {
		ingredients: {
			sauce: false,
			cheese: false,
			pepperoni: false,
			olive: false,
			mushroom: false
		}
	};

	componentDidMount() {
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		for (let param of query.entries()) {
			ingredients[param[0]] = param[1];
		}
		this.setState({ ingredients: ingredients });
	}
	checkoutCancelledHandler = () => {
		this.props.history.goBack();
	};

	checkoutConfirmedHandler = () => {
		this.props.history.replace("/checkout/contact-data");
	};

	render() {
		return (
			<div>
				<CheckoutSummary
					ingredients={this.state.ingredients}
					checkoutCancelled={this.checkoutCancelledHandler}
					checkoutConfirmed={this.checkoutConfirmedHandler}
				/>
				<Route
					path={this.props.match.path + "/contact-data"}
					component={ContactData}
				/>
			</div>
		);
	}
}

export default Checkout;
