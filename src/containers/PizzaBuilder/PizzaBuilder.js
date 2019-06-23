import React, { Component } from "react";
import Pizza from "../../components/Pizza/Pizza";
import BuildControls from "../../components/Pizza/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
	sauce: 1,
	cheese: 2,
	pepperoni: 3,
	olive: 3,
	mushroom: 2
};

class PizzaBuilder extends Component {
	state = {
		ingredients: {
			sauce: false,
			cheese: false,
			pepperoni: false,
			olive: false,
			mushroom: false
		},
		totalPrice: 5
	};
	render() {
		return (
			<div>
				<Pizza ingredients={this.state.ingredients} />
				<BuildControls 
					ingredientAdded={this.addIngredientHandler}/>
			</div>
		);
	}

	addIngredientHandler = type => {
		console.log("add ingredient")
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = true;

		const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type]

		this.setState({
			ingredients: updatedIngredients,
			totalPrice: newPrice
		})

		console.log(this.state)
	};
}

export default PizzaBuilder;
