import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


class StudentInfo extends PureComponent {

  render() {
    const { student } = this.props
    return(
      <div>

        <h1>Student Information</h1>

        <img src={ student.photo } alt="profile"/>
        <p>First Name: {student.firstName}</p>
        <p>Last Name: { student.lastName }</p>
        <p>Batch #{this.props.batch.id}</p>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    student: state.student
  }
}

export default connect(mapStateToProps)(StudentInfo)
