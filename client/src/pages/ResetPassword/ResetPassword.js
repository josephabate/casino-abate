import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from "axios";

import './ResetPassword.scss';

class ResetPassword extends Component {
    state = {
        password: "",
        rePassword: "",
        errorMessage: ""
    }

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    onChangeRepassword = (e) => {
        this.setState({
            rePassword: e.target.value
        })
    }


    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.password === this.state.rePassword) {

            axios.post("/reset-password", { newPassword: this.state.password, id: this.props.match.params.id })
                .then((data) => {
                    console.log(data)
                    this.props.history.push(`/registration`);
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            this.setState({
                errorMessage: "Passwords don't match"
            })
        }
    }



    render() {
        return (
            <div className="ResetPassword">
                <h1>Reset password</h1>
                <h4>{this.state.errorMessage}</h4>
                <form className="ResetPassword__form" onSubmit={this.onSubmit}>
                    <label className="ResetPassword__label">Password</label>
                    <input className="ResetPassword__input" value={this.state.password} onChange={this.onChangePassword} type="password" name="password" />
                    <label className="ResetPassword__label">Re-enter Password</label>
                    <input className="ResetPassword__input" value={this.state.rePassword} onChange={this.onChangeRepassword} type="password" name="re-password" />
                    <button className="ResetPassword__btn" type="submit">RESET PASSWORD</button>
                </form>
            </div>
        );
    }
}

export default withRouter(ResetPassword);
