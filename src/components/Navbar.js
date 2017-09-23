import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'

class Navbar extends Component {

  renderNavLinks() {
    if (this.props.isLoggedin) {
      return(
        <div>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <a href="/" onClick={this.handleLogout.bind(this)}>Logout</a>
          </li>
        </div>
      )
    } else {
      return(
        <div>
          <li>
            <Link to="/user_register">Register</Link>
          </li>
          <li>
            <Link to="user_login">Login</Link>
          </li>
        </div>
      )
    }
  }


  // EVENT HANDLERS
  handleLogout() {
    localStorage.removeItem('userCookie')
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link className="left" to={this.props.isLoggedin ? "/dashboard" : "/"} style={{ paddingLeft: "1rem" }}>
            AUTH
          </Link>
          <ul className="right">
            {this.renderNavLinks()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
