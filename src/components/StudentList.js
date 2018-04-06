import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchBatch } from '../actions/batches'
import { createStudent, removeStudent } from '../actions/students'

import Student from './Student'
import StudentForm from './StudentForm'
import '../styles/Student.css'

const stockImage = 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'

class StudentList extends PureComponent {

  state = {
    edit: false
  }

  static propTypes = {
    batch: PropTypes.shape({
      id: PropTypes.number.isrequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      students: PropTypes.array.isRequired
    }).isRequired
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  componentWillMount(props) {
    this.props.fetchBatch(this.props.match.params.id)
  }

  createStudent = (student, batchId) => {
    this.props.createStudent(student, this.props.match.params.id)

  }

  removeStudent = (studentId) => {
    this.props.removeStudent(studentId)
  }

  percentageColor(students, color) {

    const evaluated = (students) ? students.filter(student => student.evaluations && student.evaluations.length > 0) : null
    const evaluationColor = (evaluated) ? evaluated.filter(student => student.evaluations[0].color === color) : null
    const percentageColor = (evaluationColor) ? Math.round((evaluationColor.length / evaluated.length) * 100) + '%' : null
    return percentageColor || null
  }

  sortEvaluations = (evaluations) => {
    evaluations.sort(function(a, b) {
       return  (Date.parse(b.date) - Date.parse(a.date));
     })
     return evaluations
  }

  sortEvaluations2 = (students) => {
    const evaluatedStudents = (students) ? students.filter(student => student.evaluations && student.evaluations.length > 0) : null
    evaluatedStudents.map(student => student.evaluations.sort(function(a, b) {
       return  (Date.parse(b.date) - Date.parse(a.date));
     })
    )
    return evaluatedStudents
   }

   redStudents = (sortedStudents) => {
     const redStudents = sortedStudents.filter(student => student.evaluations[0].color === 'red')
       return redStudents
   }

   yellowStudents = (sortedStudents) => {
     const yellowStudents = sortedStudents.filter(student => student.evaluations[0].color === 'yellow')
       return yellowStudents
   }

   greenStudents = (sortedStudents) => {
     const greenStudents = sortedStudents.filter(student => student.evaluations[0].color === 'green')
       return greenStudents
   }
   // Insert array of above students array as argument:
  randomStudent = (studentsArray) => {
    const weight = [ 53, 81, 100 ]
    const n = Math.floor(Math.random() * 100)

    for(var i = 0 ; i < weight.length; i++){
      if(n < weight[i]){
        if (studentsArray[i].length > 0) {
          return studentsArray[i][ Math.floor(Math.random() * studentsArray[i].length ) ].id
        } else {
          return null
        }
      }
    }
  }

  render() {

    const { batch } = this.props
    if(!batch) return null

    return(
      <div>

        <h1 className="batch-title">Batch #{batch.id}</h1>

        <button onClick={this.toggleEdit} className="new-student-btn">Add a student</button>

        <Link to={ `/students/${this.randomStudent(
          [
            this.redStudents(this.sortEvaluations2(batch.students)),
            this.yellowStudents(this.sortEvaluations2(batch.students)),
            this.greenStudents(this.sortEvaluations2(batch.students))
          ]
        )}` }
          className="random-btn"> Ask A Question </Link>

        {
          this.state.edit &&
          <StudentForm onSubmit={this.createStudent} class="student-form"/>
        }

          <div className="percentage-bar">

            <div
              style={{width : this.percentageColor(this.sortEvaluations2(batch.students), "green")}}
              className="percentage-green"
            >
              {this.percentageColor(this.sortEvaluations2(batch.students), "green")}
            </div>

            <div
              style={{width : this.percentageColor(this.sortEvaluations2(batch.students), "yellow")}}
              className="percentage-yellow"
            >
              {this.percentageColor(this.sortEvaluations2(batch.students), "yellow")}
            </div>

            <div
              style={{width : this.percentageColor(this.sortEvaluations2(batch.students), "red")}}
              className="percentage-red"
            >
              {this.percentageColor(this.sortEvaluations2(batch.students), "red")}
            </div>

          </div>


        <div className="student-list">
          {
            batch.students.map((student, index) => (
              <div className="student">

                <Student

                  key={index}
                  batch={this.props.batch}
                  firstName={student.firstName}
                  lastName={student.lastName}
                  photo={
                    student.photo.indexOf("jpg") >= 0 || student.photo.indexOf("png") >= 0 ?
                      student.photo : stockImage
                    }

                  id={student.id}

                  color={student.evaluations && student.evaluations.length > 0 ?
                    this.sortEvaluations(student.evaluations)[0].color : 'grey'}

                  evaluations={student.evaluations && student.evaluations.length > 0 ?
                    student.evaluations.length : 0 }

                  status={student.evaluations && student.evaluations.length > 0 ?
                    this.sortEvaluations(student.evaluations)[0].color : 'grey'}

                 />

                 <div className="links">
                  <Link to={ `/students/${student.id}` } className="view-link">View</Link>

                  <button onClick={ () => this.removeStudent(student.id) } className="remove-link">
                    Remove
                  </button>
                </div>

               </div>
            ))
          }
        </div>

        <Link to={ `/batches/` } className="back-link">Back to List of Batches</Link>

      </div>
    )
  }

}

const mapStateToProps = (state, props) => {
  return {
    batch: state.batch
  }
}

export default connect(mapStateToProps, { fetchBatch, createStudent, removeStudent })(StudentList)
