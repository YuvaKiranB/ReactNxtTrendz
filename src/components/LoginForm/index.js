// Write your JS code here
import {Component} from 'react'

import './index.css'

class GetLoginForm extends Component {
  state = {username: '', password: '', isError: false, errorMessage: ''}

  updateUsername = event => {
    this.setState({username: event.target.value})
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  renderInputContainer = () => {
    const {username, password} = this.state
    return (
      <>
        <div className="textContainer">
          <label className="inputLabel" htmlFor="username">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            className="inputField"
            value={username}
            onChange={this.updateUsername}
            placeholder="Username"
          />
        </div>

        <div className="passwordContainer">
          <label className="inputLabel" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="inputField"
            value={password}
            onChange={this.updatePassword}
            placeholder="Password"
          />
        </div>
      </>
    )
  }

  loginSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok) {
      this.loginSuccess()
      this.setState({isError: false})
    } else {
      this.setState({isError: true, errorMessage: data.error_msg})
    }
  }

  render() {
    const {isError, errorMessage} = this.state
    console.log(isError, errorMessage)
    return (
      <div className="loginFormContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="loginImage"
        />

        <form className="formCard" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logoImage"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="loginImageSmall"
          />

          <div className="inputContainer">{this.renderInputContainer()}</div>
          <button type="submit" className="submitButton">
            Login
          </button>
          {isError ? <p className="errorMessage">{`* ${errorMessage}`}</p> : ''}
        </form>
      </div>
    )
  }
}

export default GetLoginForm
