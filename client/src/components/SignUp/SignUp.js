import React, { Component } from "react";
import axios from "axios";

class SignUp extends Component {
  render() {
    return (
      <div>
        <h2>CREATEACCOUNT</h2>
        <form>
          <div>
            <label htmlFor="email">EMAIL</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label htmlFor="username">USERNAME</label>
            <input type="text" name="username" required />
          </div>
          <div>
              <label htmlFor="password" >PASSWORD</label>
              <input type="password" name="password" required />
          </div>
          <div>
              <label htmlFor="rePassword">RE-PASSWORD</label>
              <input type="password" name="rePassword" required />
          </div>

          <button type="submit">SIGN UP NOW</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
