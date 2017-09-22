import React, { Component } from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// COMPONENTS
import Landing from './Landing'
import Dashboard from './Dashboard'
import Login from './Login'
import Register from './Register'
import NotFound from './NotFound'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/user_login" component={Login} />
                <Route exact path="/user_register" component={Register} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="*" component={NotFound} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
