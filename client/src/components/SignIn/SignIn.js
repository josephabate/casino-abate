import React, { Component } from 'react';
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    }

    onChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    };

    onChangePassword = (e) => {
        this.setState({ password: e.target.value });
    };

    onFormSubmit = (e) =>{
        e.preventDefault();

        const user ={
            email: this.state.email,
            password: this.state.password
        }
 
        axios.post(`${API_URL}/login`, user).then((data)=>{
            console.log("LOGIN", data);
          })
          .catch((err)=>{
            this.setState({
              errorCode: "Not Found"
            })
          })
    }


    render() {
        return (
            <div>
                <h2>Sign IN</h2>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input required type="email" name="username" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input required type="password" name="password" value={this.state.password} onChange={this.onChangePassword} />
                    </div>
                    <div>
                        <button type="submit">LOG IN</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
