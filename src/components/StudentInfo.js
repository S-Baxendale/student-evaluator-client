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

  createEvaluation = (evaluation, studentId, teacher) => {
    this.props.createEvaluation(evaluation, this.props.match.params.id, this.props.currentUser.teacher)
    console.log('New Evaluation clicked')
    console.log(this.props.match.params.id)
    console.log(this.props.currentUser.teacher)
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
