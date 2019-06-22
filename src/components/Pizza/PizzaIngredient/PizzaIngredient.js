import React, { Component } from "react";
import styles from "./PizzaIngredient.module.css";
import PropTypes from "prop-types";

class PizzaIngredient extends Component {
	render() {
		let ingredient = null;

		switch (this.props.type) {
			case "sauce":
				ingredient = <div className={styles.sauce} />;
				break;
			case "cheese":
				ingredient = <div className={styles.cheese} />;
				break;
			case "pepperoni":
				ingredient = <div className={styles.pepperoni} />;
				break;
			case "olive":
				ingredient = <div className={styles.olive} />;
				break;
			case "mushroom":
				ingredient = <div className={styles.mushroom} />;
				break;
			default:
				ingredient = null;
		}
		return ingredient;
	}
}

PizzaIngredient.propTypes = {
	type: PropTypes.string.isRequired
};

export default PizzaIngredient;
