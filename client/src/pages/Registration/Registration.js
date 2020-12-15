import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './Registration.scss';

class Registration extends Component {

    render() {
        return (
            <div className="Registration">
                <div className="Registration__wrapper">
                    <div>
                        <SignIn />
                        <Link className="Registration__forget" to="/forget-password">Forget Password</Link>
                    </div>
                    <SignUp />
                </div>
            </div>
        );
    }
}

export default Registration;
