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
		{controls.map(control => (
			<BuildControl
				key={control.label}
				label={control.label}
				addItem={() => props.ingredientAdded(control.type)}
			/>
		))}
	</div>
);

export default buildControls;
