import React, {Component} from 'react';
import Pizza from '../../components/Pizza/Pizza'
import BuildControls from '../../components/Pizza/BuildControls/BuildControls'

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
			<BuildControls/>
		</div>
	}
}

export default PizzaBuilder