import React, { Component } from 'react';
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

class SignIn extends Component {
    state = {
        username: "",
        password: ""
    }

    onChangeUsername = (e) => {
        this.setState({ username: e.target.value });
    };

    onChangePassword = (e) => {
        this.setState({ password: e.target.value });
    };

    onFormSubmit = (e) =>{
        e.preventDefault();
    }


    render() {
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="username">UserName</label>
                        <input required type="text" name="username" value={this.state.username} onChange={this.onChangeUsername} />
                    </div>
                    <div>
                        <label htmlFor="password"></label>
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
