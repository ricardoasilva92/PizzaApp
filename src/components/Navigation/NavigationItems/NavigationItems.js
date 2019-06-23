import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import styles from './NavigationItems.module.css'


const navigationItems = () => (
	<ul className={styles.NavigationItems}>
		<NavigationItem link='/'> Pizza Builder		</NavigationItem>
		<NavigationItem link='/'> Checkout		</NavigationItem>
	</ul>
);

export default navigationItems;