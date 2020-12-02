import React, { Component } from "react";
import axios from "axios";

class SignUp extends Component {

    state={
        email: "",
        username: "",
        password: "",
        rePassword: ""
    }

    stateSet = (email = this.state.email, username = this.state.username, password = this.state.password, rePassword = this.state.rePassword) => {
        this.setState({
            email: email,
            username: username,
            password: password,
            rePassword: rePassword
        })
    }

    onChangeEmail = (e) =>{
        this.stateSet(e.target.value);
    }

    onChangeUsername = (e) =>{
        this.stateSet(this.state.email, e.target.value);
    } 

    onChangePassword = (e) =>{
        this.stateSet(this.state.email, this.state.username, e.target.value);
    } 

    onChangerePassword = (e) =>{
        this.stateSet(this.state.email, this.state.username, this.state.password, e.target.value)
    } 

    onFormSubmit = (e) => {

    }


  render() {
    return (
      <div>
        <h2>CREATEACCOUNT</h2>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label htmlFor="email">EMAIL</label>
            <input type="email" name="email" required value={this.state.email} onChange={this.onChangeEmail}/>
          </div>
          <div>
            <label htmlFor="username">USERNAME</label>
            <input type="text" name="username" required value={this.state.username} onChange={this.onChangeUsername}/>
          </div>
          <div>
              <label htmlFor="password" >PASSWORD</label>
              <input type="password" name="password" required value={this.state.password} onChange={this.onChangePassword}/>
          </div>
          <div>
              <label htmlFor="rePassword">RE-PASSWORD</label>
              <input type="password" name="rePassword" required value={this.state.rePassword} onChange={this.onChangerePassword}/>
          </div>

          <button type="submit">SIGN UP NOW</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
