import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import { fetchAllBatches, createBatch } from '../actions/batches'
import BatchForm from './BatchForm'

class BatchList extends PureComponent {

  componentDidMount(props) {
    this.props.fetchAllBatches()
  }

  createBatch = (batch) => {
    this.props.createBatch(batch)
    console.log('Created Batch')
  }

  render() {
    const { batches, currentUser } = this.props

    return(
      <div>

        <h1>All Batches</h1>

        {
          batches
            .sort(function(a, b) {
               return  (b.id - a.id);
             })
            .map((batch, index) => (

              <div className="batch" key={index}>
                <h1>Batch No. {batch.id}</h1>
                <p>{batch.students ?
                  batch.students.length : 0 } students</p>
                <p>Start Date: {batch.startDate}</p>
                <p>End Date: {batch.endDate}</p>
                <Link to={ `/batches/${batch.id}` } >View Batch</Link>
              </div>

          ))
        }

        <h2>Create New batch</h2>

        <BatchForm onSubmit={this.createBatch} />

      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    batches: state.batches,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { fetchAllBatches, createBatch })(BatchList)
