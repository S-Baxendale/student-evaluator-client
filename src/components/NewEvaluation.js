import React, { PureComponent} from 'react'
import '../styles/NewEvaluation.css'
import { Redirect } from 'react-router-dom'

class NewEvaluation extends PureComponent {
  state = {
    redirectToNewPage: false,
    redirectToNext: false
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.setState({ redirectToNewPage: true })
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.setState({ redirectToNext: true })
  }


  render() {
    const { batch } = this.props
    const initialValues = this.props.initialValues || {}

    if (this.state.redirectToNewPage) {
     return (
     <Redirect to={`/batches/${batch.id}`} />
     )
   }

   if (this.state.redirectToNext) {
    return (
    <Redirect to={`/batches/${batch.id}`} />
    )
  }


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

        <button
          className="submit-evaluation"
          onclick={this.handleClick}
          >Save & Next
        </button>
      </form>
    )
  }



}

export default NewEvaluation
