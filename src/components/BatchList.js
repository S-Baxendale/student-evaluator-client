import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// Import fetchAllBatches actions

class BatchList extends PureComponent {


  render() {
    const { batches } = this.props
    return(
      <div>
        <h1>All Batches</h1>

        {
          batches.map(batch => {
            <Batch />
          })
        }


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

export default connect(mapStateToProps)(BatchList)
