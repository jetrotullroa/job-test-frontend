import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { toast } from 'materialize-css'

class Login extends Component {

  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      errors: false
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleFormInput = this.handleFormInput.bind(this)
  }

  handleFormSubmit(e) {
    e.preventDefault()
    const userData = localStorage.getItem('userData')
    const user = JSON.parse(userData)
    let userCookie = {
      cookie: `th1sis@k3y${this.state.username}`
    }

    if (!userData) {
      toast('There is no registered user yet. Please go to Register page and signup for a new account.')
    } else if ( user.username === this.state.username &&
         user.password === this.state.password ) {
      localStorage.setItem('userCookie', JSON.stringify(userCookie))
      toast('Login Successfully', 4000)
      this.props.history.push('/dashboard')
    } else {
      this.setState({
        errors: true
      })
      toast('Invalid Credentials', 4000)
      this.props.history.push('/user_login')
    }

  }

  handleFormInput(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }


  render() {
    return (
      <div>
        <h1 className="center-align">Login</h1>
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
            <div className="buttons center-align">
              <button className="btn waves-effect waves-light">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
