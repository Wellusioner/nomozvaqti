import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import TableRow from './TableRow'
import Loader from './Loading'

class Table extends PureComponent{
  render(){
  	const { data } = this.props.otherDay
  	if(!data){
  		return <Loader/>
  	}
  	return (
	    <div className="py-2">
	    	<h3 className="text-center">Bir oylik namoz vaqtlari jadvali</h3>
	      <table className="table table-striped table-bordered">
	      	<thead className="thead-dark">
	      	<tr>
	      		<th>Kunlar</th>
	      		<th>Tong</th>
	      		<th>Quyosh</th>
	      		<th>Peshin</th>
	      		<th>Asr</th>
	      		<th>Shom</th>
	      		<th>Xufton</th>
	      	</tr>
	      	</thead>
	      	<tbody>
	      		{
	      			data 
	      			?
	      			data.map((item, index) => <TableRow key={index} {...item} />)
	      			: 
	      			null
	      		}
	      	</tbody>
	      </table>
	    </div>
	  )
  }
}

const mapStateToProps = state => {
	return {
		otherDay: state.default.other
	}
}

export default  connect(mapStateToProps, null)(Table)