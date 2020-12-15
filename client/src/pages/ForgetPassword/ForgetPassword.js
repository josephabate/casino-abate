import React, { Component } from 'react';
import axios from "axios";

class ForgetPassword extends Component {

    state={
        email: ""
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    onSubmit = (e) =>{
        e.preventDefault();
        axios.post("/forget-password", {email: this.state.email})
        .then((data)=>{
            console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h2>RESET PASSWORD</h2>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="email">Enter the Email you signed up with</label>
                    <input value={this.state.email} onChange={this.onChangeEmail} required type="email" name="email"/>
                    <button type="submit">SEND EMAIL</button>
                </form>
            </div>
        );
    }
}

export default ForgetPassword;
