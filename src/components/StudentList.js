import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchBatch } from '../actions/batches'

import Student from './Student'
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

  percentageYellow(students) {
    const evaluated = students.filter(student => student.evaluations && student.evaluations.length > 0)
    const yellow = evaluated.filter(student => student.evaluations[0].color === 'yellow')
    const percentageYellow = (evaluated.length / yellow.length) * 100
    return percentageYellow
  }

  render() {

    const { batch } = this.props
    if(!batch) return null

    return(
      <div>
        <h1>Batch #{batch.id}</h1>

        <p>Percentage yellow: {this.percentageYellow(batch.students)}</p>

        <div className="flex-container">
          {
            batch.students.map((student, index) => (

              <Student
                className="flex"
                key={index}
                firstName={student.firstName}
                lastName={student.lastName}
                photo={student.photo}
                color={student.evaluations && student.evaluations.length > 0 ?
                  student.evaluations[0].color : 'grey'}
               />
            ))
          }
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state, props) => {
  return {
    batch: state.batch
  }
}

export default connect(mapStateToProps, { fetchBatch })(StudentList)
