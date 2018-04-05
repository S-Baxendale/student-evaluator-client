import React, { PureComponent} from 'react'
import { connect } from 'react-redux'
import '../styles/EvaluationHistory.css'

class EvaluationHistory extends PureComponent {

  sortEvaluations = (evaluations) => {
    evaluations.sort(function(a, b) {
       return  (Date.parse(b.date) - Date.parse(a.date));
     })
     console.log(evaluations)
     return evaluations
  }

  render() {

    const { student } = this.props
    if(!student) return null

    return(
      <div>
        <h2>Evaluation History</h2>

        {
          this.sortEvaluations(student.evaluations)
              .map((evaluation, index) => (
            <div className={evaluation.color}>
              <p>{evaluation.color}</p>
            </div>
          ))
        }
      </div>
    )

  }

}
const mapStateToProps = (state) => {
  return {
    student: state.student
  }
}

export default connect(mapStateToProps)(EvaluationHistory)
