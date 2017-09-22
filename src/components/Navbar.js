import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link className="left" to="/" style={{ paddingLeft: "1rem" }}>
            AUTH
          </Link>
          <ul className="right">
            <li>
              <Link to="/user_register">Register</Link>
            </li>
            <li>
              <Link to="user_login">Login</Link>
            </li>

            <li>
              <a to="">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
