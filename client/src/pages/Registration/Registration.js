import React, { Component } from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

class Registration extends Component {

    componentDidMount(){
        axios.get(`${API_URL}/user`)
        .then((res)=>{
            console.log(res.data);
        })
    }

    render() {
        return (
            <div>
                <SignIn />
                <SignUp />                
            </div>
        );
    }
}

export default Registration;
