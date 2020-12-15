import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from "axios";

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
            <div>
                <h1>Reset password</h1>
                <h4>{this.state.errorMessage}</h4>
                <form onSubmit={this.onSubmit}>
                    <label>Password</label>
                    <input value={this.state.password} onChange={this.onChangePassword} type="password" name="password" />
                    <label>Re-enter Password</label>
                    <input value={this.state.rePassword} onChange={this.onChangeRepassword} type="password" name="re-password" />
                    <button type="submit">RESET PASSWORD</button>
                </form>
            </div>
        );
    }
}

export default withRouter(ResetPassword);
