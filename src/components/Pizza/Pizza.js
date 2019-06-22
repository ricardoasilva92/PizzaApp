import React from 'react'
import styles from './Pizza.module.css'
import PizzaIngredient from './PizzaIngredient/PizzaIngredient'

const basePizza = styles.Pizza + ' ' + styles.Pizzacrust;

const pizza = (props) => {
	const ingredients = Object.keys(props.ingredients);

	let pizzaIngredients = [];

	ingredients.forEach((ingredientkey,index) => {
		if(props.ingredients[ingredientkey]){
			pizzaIngredients.push(<PizzaIngredient key={ingredientkey+index}type={ingredientkey}/>)
		}
	})

	return (
		<div className={basePizza}> 
			{pizzaIngredients.length===0 ? 
				<p>Please insert ingredients</p>
				: pizzaIngredients}
		</div>
	);
};

export default pizza;