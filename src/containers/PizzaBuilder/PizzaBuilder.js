import React, {Component} from 'react';
import Pizza from '../../components/Pizza/Pizza'

class PizzaBuilder extends Component{
	state = {
		ingredients : {
			sauce: true,
			cheese: true,
			pepperoni: true,
			olive: true,
			mushroom: true
		}
	}
	render(){
		return <div>
			<Pizza ingredients={this.state.ingredients}/>
			<div>Pizza Controls</div>
		</div>
	}
}

export default PizzaBuilder