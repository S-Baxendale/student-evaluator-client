import React, { PureComponent} from 'react'

class NewEvaluation extends PureComponent {
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

        <h2>Add an Evaluation</h2>

        <input type="date" name="date" />

        <input type="radio" name="color" value="green" />
        <input type="radio" name="color" value="yellow" />
        <input type="radio" name="color" value="red" />

        <div className="input">
          <label htmlFor="remark">Remark: </label>
          <textarea
            name="remark"
            id="remark"
            value={ this.state.remark || initialValues.remark || ''}
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

export default NewEvaluation
