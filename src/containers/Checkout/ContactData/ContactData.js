import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button'
import styles from './ContactData.module.css'

class ContactData extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: ''
		}
	}

	render () {
		return (
			<div className={styles.ContactData}>
				<h4> Enter your Contact Data</h4>
				<form>
					<input className={styles.Input} type="text" name="name" placeholder="your name" />
					<input className={styles.Input} type="email" name="email" placeholder="your email" />
					<input className={styles.Input} type="text" name="street" placeholder="street" />
					<input className={styles.Input} type="text" name="postal" placeholder="Postal Code" />
					<Button btnType="Success"></Button>
				</form>
			</div>
		)
	}
}

export default ContactData;