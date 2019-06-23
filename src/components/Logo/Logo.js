import React from 'react';
import pizzaLogo from '../../assets/images/pizzalogo.png'
import styles from './Logo.module.css'

const logo = (props) => (
	<div className={styles.Logo}>
		<img src= {pizzaLogo} alt="Mypizza"></img>
	</div>

);

export default logo;