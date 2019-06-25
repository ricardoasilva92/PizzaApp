import React from "react";
import Pizza from "../../Pizza/Pizza";
import Button from "../../UI/Button/Button";
import styles from './CheckoutSummary.module.css'

const checkoutSummary = props => {
	return (
		<div className={styles.CheckoutSummary}>
			<h1>We hope it tastes well</h1>
			<div style={{ width: "100%", height: "300", margin: "auto" }}>
				<Pizza ingredients={props.ingredients} />
			</div>
			<Button btnType="Danger" clicked={props.checkoutCancelled}>
				CANCEL
			</Button>
			<Button btnType="Success" clicked={props.checkoutConfirmed}>
				GO
			</Button>
		</div>
	);
};

export default checkoutSummary;
