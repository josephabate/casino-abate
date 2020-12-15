import React, { Component } from "react";
import axios from "axios";

import './SignUp.scss';

class SignUp extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    rePassword: "",
    errorCode: ""
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
    } else {
      this.setState({
        errorCode: "",
      });
    }

    //new user object to be passed to back end
    const newUser = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      varified: false
    };

    axios.post(`/register`, newUser)
      .then((resp) => {
        this.setState({
          email: "",
          username: "",
          password: "",
          rePassword: "",
          errorCode: resp.data
        })
      })
      .catch((err) => {
        this.setState({
          errorCode: "Email Already Taken"
        })
      });
  };

  //checks if email is already in use
  checkEmail = (email) => {
    return true;
  };

  render() {
    return (
      <div className="SignUp">
        <h2 className="SignUp__title">CREATE ACCOUNT</h2>
        <form onSubmit={this.onFormSubmit}>
          <p>{this.state.errorCode}</p>
          <div className="SignUp__input-wrapper">
            <label className="SignUp__label" htmlFor="email">EMAIL</label>
            <input
            className="SignUp__input"
              type="email"
              name="email"
              required
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="SignUp__input-wrapper">
            <label className="SignUp__label" htmlFor="username">USERNAME</label>
            <input
            className="SignUp__input"
              type="text"
              name="username"
              required
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="SignUp__input-wrapper">
            <label className="SignUp__label" htmlFor="password">PASSWORD</label>
            <input
            className="SignUp__input"
              type="password"
              name="password"
              required
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="SignUp__input-wrapper">
            <label className="SignUp__label" htmlFor="rePassword">RE-PASSWORD</label>
            <input
            className="SignUp__input"
              type="password"
              name="rePassword"
              required
              value={this.state.rePassword}
              onChange={this.onChangeRePassword}
            />
          </div>

          <button type="submit" className="SignUp__btn">SIGN UP NOW</button>
        </form>
      </div>
    );
  }
}

export default SignUp;

/**
 *
 *
 *
 * while(true){
  let dealer = 0;
  let you = 0;
  let notOver = true;
  let random;

  let x = "hit";
  do{
    x = prompt("hit or stay?")
    if(x.toLowerCase().includes("h")){
      random = Math.floor(Math.random() * 10) + 1;
      you += random;
      console.log("you are at > ", you)
      if(you > 21){
        console.log("YOU LOSE LOSER");
        notOver=false;
        break;
      }
    }
  }while(x.toLowerCase().includes("h"));

  if(notOver){
    do{
    if(dealer < 16){
      dealer += Math.floor(Math.random() * 10) + 1;
    }
    if(dealer > 21){
      console.log("DEALER BUST WITH > ", dealer)
      notOver = false;
    }}while();
  }

  if(notOver){
    console.log("DEALER > "+ dealer +" YOU >"+ you);
    if(dealer > you){
      console.log("YOU LOSE LOSER")
    }else{
      console.log("YOU WIN BUT UR STILL A LOSER, LSOER")
    }

  }
}
 */