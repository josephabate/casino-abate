import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from "axios";

import './SignIn.scss';

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

    onFormSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        //log in route
        axios({
            method: "POST",
            withCredentials: true,
            url: "/login",
            data: user
        }).then((res) => {
            sessionStorage.setItem("user", JSON.stringify(res.data))
            this.props.history.push(`/`);
        })
            .catch((err) => {
                this.setState({
                    errorCode: "Not Found"
                })
            })
    }


    render() {
        return (
            <div className="SignIn">
                <h2 className="SignIn__title">Sign In</h2>
                <form onSubmit={this.onFormSubmit}>
                    <div className="SignIn__input-wrapper">
                        <label className="SignIn__label" htmlFor="email">Email</label>
                        <input className="SignIn__input" required type="email" name="username" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <div className="SignIn__input-wrapper">
                        <label className="SignIn__label" htmlFor="password">Password</label>
                        <input className="SignIn__input" required type="password" name="password" value={this.state.password} onChange={this.onChangePassword} />
                    </div>
                    <div>
                        <button className="SignIn__btn" type="submit">LOG IN</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignIn);
