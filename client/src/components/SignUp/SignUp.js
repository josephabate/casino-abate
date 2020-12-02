import React, { Component } from "react";

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
            <label>USERNAME</label>
            <input type="text" required />
          </div>
          <div>
              <label>PASSWORD</label>
              <input type="password" required />
          </div>
          <div>
              <label>RE-PASSWORD</label>
              <input type="password" required />
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
