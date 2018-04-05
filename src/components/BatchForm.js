import React, { PureComponent} from 'react'
import '../styles/BatchForm.css'

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
      <form onSubmit={this.handleSubmit} >
        <div className="input">
          <label htmlFor="id" className="label">Batch No.</label>
          <input
            name="id"
            id="id"
            value={ this.state.id || initialValues.id || ''}
            onChange={ this.handleChange }
          />
        </div>

        <div className="input">
          <label htmlFor="startDate" className="label">Start Date</label>
          <input type="date" name="startDate" onChange={ this.handleChange }/>
        </div>


        <div className="input">
          <label htmlFor="endDate" className="label">End Date</label>
          <input type="date" name="endDate" onChange={ this.handleChange }/>
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
