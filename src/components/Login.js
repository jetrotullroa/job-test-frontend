import React, { Component } from "react";
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
    const usersCollection = localStorage.getItem('registeredUsers')
    const users = JSON.parse(usersCollection)
    let userCookie = {
      cookie: `th1sis@k3y${this.state.username}`
    }

    function fetchUser(users, username) {
      const regUser = users.filter(user => user.username === username)
      if (!regUser) {
        return false
      } else {
        return regUser[0]
      }
    }

    const user = fetchUser(users, this.state.username)

    if (!usersCollection) {
      toast('There is no registered user yet. Please go to Register page and signup for a new account.')
    } else if (!user)  {
      toast('There is no user with that username', 4000)
    } else if (user.password !== this.state.password) {
      this.setState({
        errors: true
      })
      toast('Invalid Credentials', 4000)
      this.props.history.push('/user_login')
    } else {
      localStorage.setItem('userCookie', JSON.stringify(userCookie))
      toast('Login Successfully', 4000)
      this.props.history.push('/dashboard')
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
