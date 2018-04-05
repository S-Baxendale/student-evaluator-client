import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import { fetchAllBatches, createBatch } from '../actions/batches'
import BatchForm from './BatchForm'
import '../styles/BatchList.css'

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

      <h2>Create New batch</h2>

      <BatchForm onSubmit={this.createBatch} class="batch-form"/>


        <h2 className="batch-title">All Batches</h2>

        <div className="flex-container">
          {
            batches
              .sort(function(a, b) {
                 return  (b.id - a.id);
               })
              .map((batch, index) => (


                <div className="batch" key={index}>
                <Link to={ `/batches/${batch.id}` } className="batch-link">
                  <div className="batch-header">
                    <h3>Batch No. {batch.id}</h3>
                  </div>

                  <div className="batch-body">
                    <p>{batch.students ?
                      batch.students.length : 0 } students</p>
                    <p><b>Start Date:</b> {batch.startDate.slice(0,10)}</p>
                    <p><b>End Date:</b> {batch.endDate.slice(0,10)}</p>

                  </div>
                </Link>
                </div>


            ))
          }
        </div>



      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    batches: state.batches,
    student: state.student,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { fetchAllBatches, createBatch })(BatchList)
