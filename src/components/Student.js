import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '../styles/Student.css'

class Student extends PureComponent {

  render() {

    return(
      <div>
        <img src={this.props.photo} alt="Profile"/>
        
        <h3>{this.props.firstName} {this.props.lastName}</h3>
        <p>Student ID: {this.props.id}</p>
        <p>Evaluations: {this.props.evaluations}</p>
        <div className={this.props.status}></div>
      </div>
    )
  }
}

export default Student
