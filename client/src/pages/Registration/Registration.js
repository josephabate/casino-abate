import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import ribin from '../../assets/images/game-elements/suitRibin2.png'

import './Registration.scss';

class Registration extends Component {

    render() {
        return (
            <section className="Registration">
                <h1 className="Registration__title">CASINO ABATE - Registration</h1>
                <div className="Registration__wrapper">
                    <div className="Registration__wrapper-inner">
                        <SignIn />
                        <Link className="Registration__forget" to="/forget-password">Forget Password</Link>
                    </div>
                    <img className="Registration__ribin" src={ribin} alt="ribin" />
                    <SignUp />
                </div>
            </section>
        );
    }
}

export default Registration;
