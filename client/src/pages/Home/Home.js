import React, { Component } from 'react';
import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL;
class Home extends Component {
    componentDidMount(){
        axios.get(`${API_URL}/user`, {withCredentials: true})
            .then((res)=>{
                console.log("works ere " +  res.data.password);
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
