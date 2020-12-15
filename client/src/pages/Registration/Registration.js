import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

class Registration extends Component {

    render() {
        return (
            <div>
                <SignIn/>
                <Link to="/forget-password">Forget Password</Link>
                <SignUp />                
            </div>
        );
    }
}

export default Registration;
