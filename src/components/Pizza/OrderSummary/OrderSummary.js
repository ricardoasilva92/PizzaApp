import React from "react";
import Button from '../../UI/Button/Button'

const orderSummary = props => {
	const ingredientSummary = Object.keys(props.ingredients)
		.filter(ingredientKey => props.ingredients[ingredientKey] == true)
		.map(ingredientKey => (
			<li key={ingredientKey}>
				<span style={{ textTransform: "capitalize" }}>{ingredientKey}</span>
			</li>
		));

	return (
		<div>
			<h3>Your order</h3>
			<p>Pizza Time!</p>
			<u>{ingredientSummary}</u>
			<p>Continue to checkout?</p>
			<Button btnType="Danger" clicked={props.purshaseCancelled}>Cancel</Button>
			<Button btnType="Success" clicked={props.purshaseContinued}>Continue</Button>
		</div>
	);
};

export default orderSummary;
