import React, { Component } from "react";
import Pizza from "../../components/Pizza/Pizza";
import BuildControls from "../../components/Pizza/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Pizza/OrderSummary/OrderSummary'

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
		totalPrice: 5,
		isPurshasable: false,
		purshasing: false
	};
	render() {
		return (
			<div>
				<Modal show={this.state.purshasing} clickedBackDrop={this.purshaseCancelOrder}> <OrderSummary ingredients={this.state.ingredients}/></Modal>
				<Pizza ingredients={this.state.ingredients} />
				<BuildControls
					isPurshasable={this.state.isPurshasable}
					totalPrice={this.state.totalPrice}
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					ingredientsState={this.state.ingredients}
					clickOrderNow={this.purshaseHandler}
				/>
			</div>
		);
	}

	purshaseCancelOrder = () => {
		this.setState({purshasing:false})
	}

	purshaseHandler = () => {
		this.setState({purshasing:true})
	}

	updateIsPurshasableState = (ingredients) => {
		const sum = Object.keys(ingredients)
			.map(ingredientKey => {
				return ingredients[ingredientKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);
		this.setState({ isPurshasable: sum > 0 });
	};

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
		this.updateIsPurshasableState(updatedIngredients);
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
		this.updateIsPurshasableState(updatedIngredients);
	};
	
}

export default PizzaBuilder;
