import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './Registration.scss';

class Registration extends Component {

    render() {
        return (
            <div className="Registration">
                <div>
                    <SignIn />
                    <Link className="Registration__forget" to="/forget-password">Forget Password</Link>
                </div>
                <SignUp />
            </div>
        );
    }
}

export default Registration;
