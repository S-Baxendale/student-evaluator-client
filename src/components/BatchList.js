import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// Import fetchAllBatches actions
import Batch from './Batch'

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
          batches.map(batch => {
            <Batch batch={batch} />
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
