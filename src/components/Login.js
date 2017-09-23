import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <h1 className="center-align">Login</h1>
        <div className="row">
          <form className="col s12">
            <div className="input-field col s12">
              <input
                type="text"
                className="validate"
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className="input-field col s12">
              <input
                type="text"
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
