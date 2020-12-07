import React, { Component } from 'react';
import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL;
class Home extends Component {
    componentDidMount(){
        axios.get(`${API_URL}/user`)
        .then((res)=>{
            console.log(res.data);
        })
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Home;
