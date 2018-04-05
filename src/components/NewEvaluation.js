import React, { PureComponent} from 'react'
import '../styles/NewEvaluation.css'

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

        <h2 className="add-evaluation">Add an Evaluation</h2>
        <div className="date">
          <label htmlFor="date">Date: </label>
          <input type="date" name="date" value={new Date().toISOString().substr(0, 10)} onChange={ this.handleChange }/>
        </div>

        <div className="color-picker">
          <label htmlFor="green">Green </label>
          <input type="radio" name="color" value={"green"} onChange={ this.handleChange }/>

          <label htmlFor="yellow">Yellow </label>
          <input type="radio" name="color" value="yellow" onChange={ this.handleChange }/>

          <label htmlFor="red">Red</label>
          <input type="radio" name="color" value="red" onChange={ this.handleChange }/>
        </div>

        <div className="remark">
          <div className="input">

            <textarea
              name="remark"
              id="remark"
              className="remark-box"
              placeholder="Please enter a remark for your evaluation..."
              value={ this.state.remark || initialValues.remark || ''}
              onChange={ this.handleChange }
            />
          </div>
        </div>
        <button
          className="submit-evaluation"
          type="submit">
          Save
        </button>
      </form>
    )
  }



}

export default NewEvaluation
