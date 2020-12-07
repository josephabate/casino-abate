import React, { Component } from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

class Registration extends Component {

    render() {
        return (
            <div>
                <SignIn/>
                <SignUp />                
            </div>
        );
    }
}

export default Registration;
