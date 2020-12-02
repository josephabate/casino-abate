import React, { Component } from "react";
import axios from "axios";

class SignUp extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    rePassword: "",
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onChangeRePassword = (e) => {
    this.setState({ rePassword: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log("HERE");
    if (!this.checkEmail(this.state.email)) {
      this.setState({
        errorCode: "EMAIL ALREADY IN USE",
      });
      return false;
    } else if (this.state.password !== this.state.rePassword) {
      this.setState({
        errorCode: "PASSWORDS DO NOT MATCH",
      });
      return false;
    } else if (false) {
    } else {
    }
  };

  //checks if email is already in use
  checkEmail = (email) => {
    return true;
  };

  render() {
    return (
      <div>
        <h2>CREATEACCOUNT</h2>
        <form onSubmit={this.onFormSubmit}>
          <p>{this.state.errorCode}</p>
          <div>
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              name="email"
              required
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div>
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              name="username"
              required
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div data-tip="This is the text of the tooltip2">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              name="password"
              required
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="rePassword">RE-PASSWORD</label>
            <input
              type="password"
              name="rePassword"
              required
              value={this.state.rePassword}
              onChange={this.onChangeRePassword}
            />
          </div>

          <button type="submit">SIGN UP NOW</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
