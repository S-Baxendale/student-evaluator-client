import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchBatch } from '../actions/batches'
import { createStudent } from '../actions/students'

import Student from './Student'
import StudentForm from './StudentForm'
import '../styles/Student.css'

class StudentList extends PureComponent {

  static propTypes = {
    batch: PropTypes.shape({
      id: PropTypes.number.isrequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      students: PropTypes.array.isRequired
    }).isRequired
  }

  componentWillMount(props) {
    this.props.fetchBatch(this.props.match.params.id)
  }

  createStudent = (student, batchId) => {
    this.props.createStudent(student, this.props.match.params.id)
    console.log(student)
    console.log(batchId)
  }

  percentageColor(students, color) {
    const evaluated = students.filter(student => student.evaluations && student.evaluations.length > 0)
    const yellow = evaluated.filter(student => student.evaluations[0].color === color)
    const percentageYellow = (yellow.length / evaluated.length) * 100
    return Math.round(percentageYellow)
  }


  render() {

    const { batch } = this.props
    if(!batch) return null

    return(
      <div>
        <h1>Batch #{batch.id}</h1>

        <p>Percentage yellow: {this.percentageColor(batch.students, "yellow")}</p>
        <p>Percentage green: {this.percentageColor(batch.students, "green")}</p>
        <p>Percentage red: {this.percentageColor(batch.students, "red")}</p>

        <button>Evaluate Random Student</button>

        <div className="flex-container">
          {
            batch.students.map((student, index) => (
              <div className="flex">
                <Student

                  key={index}
                  firstName={student.firstName}
                  lastName={student.lastName}
                  photo={student.photo}
                  color={student.evaluations && student.evaluations.length > 0 ?
                    student.evaluations[0].color : 'grey'}
                 />

                 <Link to={ `/students/${student.id}` } >View Student</Link>
               </div>
            ))
          }
        </div>

        <h2>Add a student to Batch #{batch.id}</h2>

        <StudentForm onSubmit={this.createStudent} />

        <Link to={ `/batches/` } >Back to List of Batches</Link>

      </div>
    )
  }

}

const mapStateToProps = (state, props) => {
  return {
    batch: state.batch
  }
}

export default connect(mapStateToProps, { fetchBatch, createStudent })(StudentList)
