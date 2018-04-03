import React, { PureComponent} from 'react'


class BatchForm extends PureComponent {
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
        <div >
          <label htmlFor="id">Batch No.</label>
          <input
            name="id"
            id="id"
            value={ this.state.id || initialValues.id || ''}
            onChange={ this.handleChange }
          />
        </div>

        <div className="input">
          <label htmlFor="startDate">Start Date</label>
          <input
            name="startDate"
            id="startDate"
            value={ this.state.startDate || initialValues.startDate || ''}
            onChange={ this.handleChange }
          />
        </div>

        <div className="input">
        <label htmlFor="endDate">End Date</label>
        <input
          name="endDate"
          id="endDate"
          value={ this.state.endDate || initialValues.endDate || ''}
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


export default BatchForm
