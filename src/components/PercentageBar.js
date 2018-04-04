import React, { PureComponent } from 'react'
import '../styles/PercentageBar.css'


class PercentageBar extends PureComponent {

  render() {
    return(
      <div className={`${this.props.color}-block`} >
      </div>
    )
  }
}

export default PercentageBar
