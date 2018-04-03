import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import fetchBatch action

class Batch extends PureComponent {
  state = {}

  render() {
    const { batch } = this.props
    return(
      <div>
        <h1>Batch No. {batch.id}</h1>
        <p>No. of students</p>
      </div>
    )
  }

}

export default Batch
