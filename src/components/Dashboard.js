import React, { Component } from "react";

// COMPONENTS
import UserList from './UserList'

class Dashboard extends Component {

  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    const registeredUsers = localStorage.getItem('registeredUsers')
    const usersCollection = JSON.parse(registeredUsers)
    this.setState({
      users: usersCollection
    })
  }

  renderUsers() {
    return this.state.users.map(user => {
      return(
        <UserList isLoggedin={this.props.isLoggedin} key={user.username} username={user.username} password={user.password} />
      )
    })
  }

  render() {
    return (
      <div>
        <h3 className="center-align">User List</h3>
        <table>
          <thead>
            <tr>
            <th className="col s6">Username</th>
            <th className="col s6">Password</th>
            </tr>
          </thead>
            <tbody>
            {this.renderUsers()}
            </tbody>
        </table>
      </div>
    );
  }
}

export default Dashboard;
