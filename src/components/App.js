import React, { Component } from "react";
import Navbar from './Navbar'

class App extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <div className="container">
          <h1>App</h1>
        </div>
      </div>
    );
  }
}

export default App;
