import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left" href="/" style={{ paddingLeft: "1rem" }}>
            AUTH
          </a>
          <ul className="right">
            <li>
              <a href="">Register</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>

            <li>
              <a href="">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
