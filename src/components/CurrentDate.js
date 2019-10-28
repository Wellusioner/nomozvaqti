import React, { PureComponent } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { getCurrentDate } from '../actions/actions'
import { bindActionCreators } from 'redux'

import Loader from './Loading'
import time from "../helpers";

class CurrentDate extends PureComponent {

  componentDidMount(){
    this.props.getCurrentDate()
  }



  render(){
    const { data } = this.props.default.current
    const newDay = new Date()
    const currentDay = moment(newDay).format('L')

    if(!data) return <div className='paper current-day-group'><Loader/></div>

    return (
      data ?
      <div className='paper '>
  
      <h1 className="text-center current-date">{currentDay}</h1>
      <div className="row current-day-group">
        <div className="col-lg-2 col-sm-4 col-6">
          <div className={`current-day-item`} >
            {data.Fajr}
            <span>Tong</span>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 col-6">
          <div className="current-day-item">
            {data.Sunrise}
            <span>Quyosh</span>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 col-6">
          <div className={`current-day-item ${time.isNow(data.Dhuhr, data.Asr)}`}>
            {data.Dhuhr}
            <span>Peshin</span>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 col-6">
          <div className={`current-day-item ${time.isNow( data.Asr, data.Maghrib)}`}>
            {data.Asr}
            <span>Asr</span>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 col-6">
          <div className={`current-day-item ${time.isNow(data.Maghrib, data.Isha )}`}>
            {data.Maghrib}
            <span>Shom</span>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 col-6">
          <div className={`current-day-item ${time.isNow(data.Isha, data.Midnight)}`}>
            {data.Isha}
            <span>Xufton</span>
          </div>
        </div>
        </div>
      </div>
      : null
    )
  }
}

const mapStateToProps = state => {
  return {
    default: state.default
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getCurrentDate,
  },
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(CurrentDate)