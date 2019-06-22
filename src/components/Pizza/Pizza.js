import React from 'react'
import styles from './Pizza.module.css'
import PizzaIngredient from './PizzaIngredient/PizzaIngredient'

const basePizza = styles.Pizza + ' ' + styles.Pizzacrust;

const pizza = (props) => {
	return (
		<div className={basePizza}> 
			<PizzaIngredient type="sauce" />
			<PizzaIngredient type="cheese" />
			<PizzaIngredient type="pepperoni" />
			<PizzaIngredient type="olive" />
			<PizzaIngredient type="mushroom" />
		</div>
	);
};

export default pizza;