import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class StudentList extends PureComponent {

  componentDidMount(props) {
    this.props.fetchBatch(this.props.match.params.id)
  }


  render() {
    const { batch } = this.props
    return(
      <div>
        <h1>Batch #{batch.id}</h1>


      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    batch: state.batch
  }
}

export default connect(mapStateToProps)(StudentList)
