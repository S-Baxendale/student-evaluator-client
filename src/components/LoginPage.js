import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { Redirect } from 'react-router-dom'
import { login } from '../actions/users'

class LoginPage extends PureComponent {

  handleSubmit = (data) => {
    this.props.login(data.email, data.password)
  }

  render() {

    if(this.props.currentUser) return (
      <Redirect to="/" />
    )

    return(
      <div>
        <h1>Login</h1>

        <LoginForm onSubmit={this.handleSubmit} />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {login} )(LoginPage)
