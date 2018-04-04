import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchStudent } from '../actions/students'


class StudentInfo extends PureComponent {

  componentWillMount(props) {
    this.props.fetchStudent(this.props.match.params.id)
  }


  render() {
    const { student } = this.props
    if (!student) return null
    return(
      <div>

        <h1>Student Information</h1>

        <img src={ student.photo } alt="profile"/>
        <p>First Name: {student.firstName}</p>
        <p>Last Name: { student.lastName }</p>

        <button>Update Student Information</button>
        <button>Remove Student</button>


      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    student: state.student
  }
}

export default connect(mapStateToProps, { fetchStudent })(StudentInfo)
