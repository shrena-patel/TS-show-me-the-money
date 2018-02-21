import React from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../actions/login'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_name: '',
      password: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    e.preventDefault()
    let {user_name, password} = this.state
    this.props.dispatch(loginUser({user_name, password}))

  }
  render() {
    return (
      <form className="form container" onSubmit={this.submit}>
        <label className="label is-large has-text-centered">Username
          <input className="input has-text-centered is-large is-fullwidth" placeholder="User Name" type="text" name="user_name" onChange={this.updateDetails}/>
        </label>
        <label className="label is-large has-text-centered">Password
          <input className="input has-text-centered is-large is-fullwidth" placeholder="Password" type="password" name="password" onChange={this.updateDetails}/>
        </label>
        <input className="button is-large is-success" value='Login' type="submit" />
      </form>
    )
  }
}

export default connect()(Login)
