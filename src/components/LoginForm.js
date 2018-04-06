import React, {PureComponent} from 'react'
//import '../styles/LoginForm.css'

class LoginForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		return (

			<form onSubmit={this.handleSubmit} class="login-form">
			<div className="login-header">Please Login</div>
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" className="login-input" value={
						this.state.email || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" className="login-input" value={
						this.state.password || ''
					} onChange={ this.handleChange } />
				</div>

				<button type="submit" className="login-btn">Login</button>
			</form>
		)
	}
}

export default LoginForm
