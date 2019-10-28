import React, { PureComponent } from 'react'


class TableRow extends PureComponent {


  render(){
    const { date, timings } = this.props
    return (
      <tr>
        <td>{date.readable}</td>
        <td>{timings.Fajr}</td>
        <td>{timings.Sunrise}</td>
        <td>{timings.Dhuhr}</td>
        <td>{timings.Asr}</td>
        <td>{timings.Maghrib}</td>
        <td>{timings.Isha}</td>
      </tr>
    )
  }
}

export default TableRow