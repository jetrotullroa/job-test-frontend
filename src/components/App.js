import React, { Component } from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// COMPONENTS
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Register from "./Register";
import NotFound from "./NotFound";

class App extends Component {

  constructor() {
    super()
    this.state = {
      isLoggedin: false
    }
  }

  componentDidMount() {
    const checkUser = localStorage.getItem('userCookie');
    const authUser = JSON.parse(checkUser)
    if (authUser) {
      this.setState({
        isLoggedin: true
      })
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar isLoggedin={this.state.isLoggedin} />
            <div className="container">
              <Switch>

                <Route exact path="/" render={(props) => (
                  <Landing {...props} isLoggedin={this.state.isLoggedin} />
                )} />

                <Route exact path="/user_login" render={(props) => (
                  <Login {...props} isLoggedin={this.state.isLoggedin} />
                )} />

                <Route exact path="/user_register" render={(props) => (
                  <Register {...props} isLoggedin={this.state.isLoggedin} />
                )} />

                <Route exact path="/dashboard" render={(props) => (
                  <Dashboard {...props} isLoggedin={this.state.isLoggedin} />
                )} />

                <Route exact path="*"
                render={(props) => (
                  <NotFound {...props} isLoggedin={this.state.isLoggedin} />
                )} />

              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
