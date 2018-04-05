import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '../styles/Student.css'

class Student extends PureComponent {

  render() {

    //const {evaluation} = this.props

    return(
      <div >
        <h3>{this.props.firstName} {this.props.lastName}</h3>
        <img src={this.props.photo} alt="Profile"/>
        <p>Evaluations: {this.props.evaluations}</p>
        <p>Last evaluation: {this.props.color}</p>
      </div>
    )
  }
}

export default Student
