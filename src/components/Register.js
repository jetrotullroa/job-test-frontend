import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

class Register extends Component {

  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      confirmPassword: ''
    }
    this.handleFormInput = this.handleFormInput.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormInput(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleFormSubmit() {
    let userData = {
      username: this.state.username,
      password: this.state.password,
    }
    let userCookie = {
      cookie: `th1sis@k3y${this.state.username}`
    }
    localStorage.setItem('userData', JSON.stringify(userData))
    localStorage.setItem('userCookie', JSON.stringify(userCookie))
    this.props.history.push('/dashboard')
    window.location.reload()
  }

  render() {
    return (
      <div>
        <h1 className="center-align">Register</h1>
        <div className="row">
          <form onSubmit={this.handleFormSubmit} className="col s12">
            <div className="input-field col s12">
              <input
                name="username"
                value={this.state.username}
                onChange={this.handleFormInput}
                type="text"
                className="validate"
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className="input-field col s12">
              <input
                name="password"
                value={this.state.password}
                onChange={this.handleFormInput}
                type="password"
                className="validate"
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-field col s12">
              <input
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleFormInput}
                type="password"
                className="validate"
              />
              <label htmlFor="confirm_password">Confirm Password</label>
            </div>

            <div className="buttons center-align">
              <button className="btn waves-effect waves-light">Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
