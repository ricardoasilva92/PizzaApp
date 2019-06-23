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
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					ingredientsState={this.state.ingredients}
				/>
			</div>
		);
	}

	addIngredientHandler = type => {
		
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = true;

		const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

		this.setState({
			ingredients: updatedIngredients,
			totalPrice: updatedPrice
		});
	};

	removeIngredientHandler = type => {
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = false;

		const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

		this.setState({
			ingredients: updatedIngredients,
			totalPrice: updatedPrice
		});
	};
}

export default PizzaBuilder;
