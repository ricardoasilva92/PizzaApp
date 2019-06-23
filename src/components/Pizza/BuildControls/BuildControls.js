import React from "react";
import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
	{ label: "Pepperoni", type: "pepperoni" },
	{ label: "Cheese", type: "cheese" },
	{ label: "Olive", type: "olive" },
	{ label: "Mushroom", type: "mushroom" },
	{ label: "Sauce", type: "sauce" }
];

const buildControls = props => (
	<div className={styles.BuildControls}>
		<div>Price: {props.totalPrice}</div>
		{controls.map(control => (
			<BuildControl
				key={control.label}
				label={control.label}
				addItem={() => props.ingredientAdded(control.type)}
				removeItem={() => props.ingredientRemoved(control.type)}
				isChosen={props.ingredientsState[control.type]}
			/>
		))}
		<button disabled={!props.isPurshasable} 
			onClick={props.clickOrderNow} className={styles.OrderButton}>
			Order now!
		</button>
	</div>
);
export default buildControls;
