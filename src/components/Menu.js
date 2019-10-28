import React, { PureComponent } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getCurrentCity } from '../actions/actions'

import SelectItem from './SelectItem'
import * as Info from '../services/address'

class Sidebar extends PureComponent {

	constructor(props){
		super(props)
		this.state = {
			month: (new Date()).getMonth() + 1,
			year: (new Date()).getFullYear(),
			city: Info.cities[0].value
		}
	}

	componentDidMount(){
			this.props.getCurrentCity(this.state)
	}

	handleCity = city => {
		this.setState({
			city
		})
	}


	handleMonth = month => {
		this.setState({
			month
		})
	}

	handleYear = year => {
		this.setState({
			year
		})
	}

	handleSubmit = () => {
		this.props.getCurrentCity(this.state)
	}

	render(){
		return (
			<div className="py-2 row">
				<div className="col-md-3">
					<SelectItem 
						options={Info.cities} 
						value={this.state.city} 
						getValue={this.handleCity} 
					/>
				</div>
				<div className="col-md-3">
					<SelectItem 
						options={Info.months} 
						value={this.state.month} 
						getValue={this.handleMonth} 
					/>
				</div>
				<div className="col-md-3">
					<SelectItem 
						options={Info.years} 
						value={this.state.year} 
						getValue={this.handleYear} 
					/>
				</div>
				<div className="col-md-3">
					<button 
						className="btn btn-success w-100"
						onClick={this.handleSubmit}
					>GO</button>
				</div>			
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({
	getCurrentCity
}, dispatch)

export default connect(null, mapDispatchToProps)(Sidebar)