import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import EvaluationHistory from './EvaluationHistory'
import NewEvaluation from './NewEvaluation'

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

        <NewEvaluation />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    student: state.student,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { fetchStudent })(StudentInfo)
