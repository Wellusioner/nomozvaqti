import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Select from 'react-select'
import { getCurrentCity } from '../actions/actions'

class SelectItem extends PureComponent {
	render(){
		const value2 = this.props.options.find(o => o.value === this.props.value);
		return(
			<Select
				options={this.props.options}
				value={value2}
				isSearchable={false}
				onChange={item => {
						this.props.getValue(item.value)
					}
				}
			theme = {theme => ({
				...theme,
				colors: {
					...theme.colors,
					primary25: 'rgba(0,181,60, 0.3)',
					primary: '#00B53C'
				}
			})}
		  />
		)
	}
}

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		getCurrentCity
	},
	dispatch
)

export default connect(null, mapDispatchToProps)(SelectItem)