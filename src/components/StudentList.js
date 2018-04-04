import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchBatch } from '../actions/batches'

class StudentList extends PureComponent {

  componentDidMount(props) {
    this.props.fetchBatch(this.props.match.params.id)
  }


  render() {

    const { batch } = this.props
    if(!batch) return null
    return(
      <div>
        <h1>Batch #{batch.id}</h1>


      </div>
    )
  }

}

const mapStateToProps = (state, props) => {
  return {
    batch: state.batch
  }
}

export default connect(mapStateToProps, { fetchBatch })(StudentList)
