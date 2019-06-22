import React, {Component} from 'react';
import Pizza from '../../components/Pizza/Pizza'

class PizzaBuilder extends Component{
	render(){
		return <div>
			<Pizza/>
			<div>Pizza Controls</div>
		</div>
	}
}

export default PizzaBuilder