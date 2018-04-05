import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import EvaluationHistory from './EvaluationHistory'
import NewEvaluation from './NewEvaluation'
import StudentForm from './StudentForm'

import { fetchStudent, updateStudent } from '../actions/students'
import { createEvaluation } from '../actions/evaluations'


const stockImage = 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'

class StudentInfo extends PureComponent {
  state = {
    edit: false
  }

  componentWillMount(props) {
    this.props.fetchStudent(this.props.match.params.id)
  }

  createEvaluation = (evaluation, studentId, teacher) => {
    this.props.createEvaluation(evaluation, this.props.match.params.id, this.props.currentUser.teacher)
    console.log('New Evaluation clicked')
    console.log(this.props.match.params.id)
    console.log(this.props.currentUser.teacher)
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  updateStudent = (student) => {
    this.props.updateStudent(this.props.match.params.id, student)
    this.toggleEdit()
  }


  render() {
    const { student, batch, currentUser } = this.props
    if (!student) return null
    return(
      <div>

        <h1>Student Information</h1>

        <p>Batch No. { student.batch.id } </p>

        
        <img src={ student.photo.indexOf("jpg") >= 0 || student.photo.indexOf("png") >= 0 ?
          student.photo : stockImage } alt="profile"/>
        <p>First Name: {student.firstName}</p>
        <p>Last Name: { student.lastName }</p>

        <button onClick={this.toggleEdit}>Update Student Information</button>

        {
          this.state.edit &&
          <StudentForm inititalValues={student} onSubmit={this.updateStudent} />
        }

        <EvaluationHistory student={student}/>

        <NewEvaluation onSubmit={this.createEvaluation}/>

        <Link to={ `/batches/${student.batch.id}` } >Back to Batch {student.batch.id}</Link>
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

export default connect(mapStateToProps, { fetchStudent, createEvaluation, updateStudent })(StudentInfo)
