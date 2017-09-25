import React, { Component } from 'react'
import { toast } from 'materialize-css'

class UserList extends Component {
  constructor() {
    super()
    this.state = {
      showPassword : false
    }
  }

  handleShowPassword(e) {
    e.preventDefault
    if (this.props.isLoggedin) {
      this.setState({
        showPassword : true
      })
    } else {
      toast('You must be logged in to open this.', 2000)
    }
  }

  render() {
    return(
        <tr>
          <td className="col s6">{this.props.username}</td>
          <td className="col s6" onClick={this.handleShowPassword.bind(this)} style={{ cursor: 'pointer' }}>{ this.state.showPassword ? this.props.password : "***hidden password***"}</td>
        </tr>
    )
  }
}


export default UserList
