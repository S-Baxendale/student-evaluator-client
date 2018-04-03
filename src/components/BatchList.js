import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchAllBatches } from '../actions/batches'
import BatchForm from './BatchForm'

class BatchList extends PureComponent {

  componentWillMount(props) {
    this.props.fetchAllBatches()
  }

  render() {
    const { batches } = this.props
    return(
      <div>
        <h1>All Batches</h1>

        {
          batches.map((batch, index) => (
            <div className="batch">
              <h1>Batch No. {batch.id}</h1>
              <p>{batch.students.length} students</p>
              <p>Start Date: {batch.startDate}</p>
              <p>End Date: {batch.endDate}</p>
            </div>

          ))
        }

        <h2>Create New batch</h2>

        <BatchForm />

      </div>
    )
  }
}

// Create New Batch Form

const mapStateToProps = (state) => {
  return {
    batches: state.batches
  }
}

export default connect(mapStateToProps, { fetchAllBatches })(BatchList)
