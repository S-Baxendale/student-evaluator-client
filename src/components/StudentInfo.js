import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import EvaluationHistory from './EvaluationHistory'
import NewEvaluation from './NewEvaluation'
import StudentForm from './StudentForm'

import { fetchStudent, updateStudent } from '../actions/students'
import { createEvaluation } from '../actions/evaluations'

import '../styles/StudentInfo.css'


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
    if(!student.batch) return null
    return(
      <div>
        <div className="info-container">
          <div className="info-flex">
            <h1 className="student-title">{student.firstName} { student.lastName }</h1>
            { student.batch.id &&
              <p>Batch No. { student.batch.id } </p>
            }

            <img src={ student.photo.indexOf("jpg") >= 0 || student.photo.indexOf("png") >= 0 ?
              student.photo : stockImage } alt="profile" className="profile"/>

            <button onClick={this.toggleEdit} className="update-student-btn">Update Student Information</button>

            {
              this.state.edit &&
              <StudentForm inititalValues={student} onSubmit={this.updateStudent} />
            }

          </div>

          <div className="info-flex">

            <EvaluationHistory student={student} />
            
            <NewEvaluation onSubmit={this.createEvaluation} batch={student.batch}/>
          </div>

        </div>
        { student.batch.id &&
        <Link to={ `/batches/${student.batch.id}` } className="back-link" >Back to Batch {student.batch.id}</Link>
      }
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
