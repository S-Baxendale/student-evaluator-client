import React, { PureComponent} from 'react'

class StudentForm extends PureComponent {
  state={}

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const initialValues = this.props.initialValues || {}
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="input">
          <label htmlFor="firstName">First Name: </label>
          <input
            name="firstName"
            id="firstName"
            value={ this.state.firstName || initialValues.firstName || ''}
            onChange={ this.handleChange }
          />
        </div>

        <div className="input">
          <label htmlFor="lastName">Last Name: </label>
          <input
            name="lastName"
            id="lastName"
            value={ this.state.lastName || initialValues.lastName || ''}
            onChange={ this.handleChange }
          />
        </div>

        <div className="input">
        <label htmlFor="photo">Add a Profile Photo URL: </label>
        <input
          name="photo"
          id="Photo"
          value={ this.state.photo || initialValues.photo || ''}
          onChange={ this.handleChange }
        />
        </div>

        <button
          className="submit"
          type="submit">
          Save
        </button>
      </form>
    )
  }

}

export default StudentForm
