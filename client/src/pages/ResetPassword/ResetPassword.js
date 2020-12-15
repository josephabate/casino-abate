import React, { Component } from 'react';
import axios from "axios";

class ResetPassword extends Component {
    state={
        password: "",
        rePassword: ""
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
        console.log(this.props.match.params.id);
        return (
            <div>
                <h1>Reset password</h1>
                <fomr>
                    <label>Password</label>
                    <input value={this.state.password}  onChange={this.onChangePassword} type="password" name="password" />
                    <label>Re-enter Password</label>
                    <input value={this.state.rePassword}  onChange={this.onChangeRepassword} type="password" name="re-password" />
                    <button type="submit">RESET PASSWORD</button>
                </fomr>
            </div>
        );
    }
}

export default ResetPassword;
