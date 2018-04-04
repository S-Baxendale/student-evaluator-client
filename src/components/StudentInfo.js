import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import EvaluationHistory from './EvaluationHistory'
import NewEvaluation from './NewEvaluation'

import { fetchStudent } from '../actions/students'
import { createEvaluation } from '../actions/evaluations'

class StudentInfo extends PureComponent {

  componentWillMount(props) {
    this.props.fetchStudent(this.props.match.params.id)
  }

  createEvaluation = (studentId, evaluation) => {
    this.props.createEvaluation(this.props.match.params.id, evaluation)
  }

  render() {
    const { student, currentUser } = this.props
    if (!student) return null
    return(
      <div>

        <h1>Student Information</h1>

        <img src={ student.photo } alt="profile"/>
        <p>First Name: {student.firstName}</p>
        <p>Last Name: { student.lastName }</p>

        <button>Update Student Information</button>
        <button>Remove Student</button>

        <NewEvaluation onSubmit={this.createEvaluation}/>
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

export default connect(mapStateToProps, { fetchStudent, createEvaluation })(StudentInfo)
