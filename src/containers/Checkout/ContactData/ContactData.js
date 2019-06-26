import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button'
import styles from './ContactData.module.css'
import axios from "../../../axios-orders";
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: ''
		}
	}

	orderHandler = (event) => {
		event.preventDefault();
		console.log(this.props.ingredients)
		this.setState({ loading: true });
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price, //price should be calculated in server
			customer: {
				name: "Ricardo",
				address: {
					street: "testStreet",
					zipCode: "41351",
					country: "Portugal"
				},
				email: "ric@MediaList.com"
			}
		};
		axios
			.post("/orders.json", order)
			.then(response => {
				this.setState({loading:false});
			})
			.catch(error => {
				this.setState({loading:false})
			});
	}

	render () {
		let form = (
			<form>
					<input className={styles.Input} type="text" name="name" placeholder="your name" />
					<input className={styles.Input} type="email" name="email" placeholder="your email" />
					<input className={styles.Input} type="text" name="street" placeholder="street" />
					<input className={styles.Input} type="text" name="postal" placeholder="Postal Code" />
					<Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
				</form>
		);
		if (this.state.loading){
			form = <Spinner/>
		}
		return (
			<div className={styles.ContactData}>
				<h4> Enter your Contact Data</h4>
				{form}
			</div>
		)
	}
}

export default ContactData;