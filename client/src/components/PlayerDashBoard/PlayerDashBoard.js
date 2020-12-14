import React from 'react';
import './PlayerDashBoard.scss';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

const PlayerDashBoard = (props) => {

    function logout() {
        axios({
            method: "GET",
            withCredentials: true,
            url: `${API_URL}/logout`
        })
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
            sessionStorage.removeItem("user");
            props.history.push(`/`);
    }

    return (
        <div className="playerDashBoard">
            <h2 className="playerDashBoard__title">{props.username}'s DASHBOARD</h2>
            <h2>Your money: ${props.money}</h2>
            <Link to="/">Back To Home</Link>
            <button onClick={() => { logout() }}>Logout</button>
        </div>
    );
}

export default withRouter(PlayerDashBoard);
