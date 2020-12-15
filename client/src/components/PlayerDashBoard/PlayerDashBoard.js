import React from 'react';
import './PlayerDashBoard.scss';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddFunds from '../AddFunds/AddFunds';

const PlayerDashBoard = (props) => {

    function logout() {
        axios({
            method: "GET",
            withCredentials: true,
            url: `/logout`
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
            <div>
                <div>
                    <h2 className="playerDashBoard__title">{props.username}'s DASHBOARD</h2>
                    <h2 className="playerDashBoard__money">Your money: ${props.money}</h2>
                </div>
                <div className="playerDashBoard__wrapper">
                    <Link to="/" className="playerDashBoard__back">Back To Home</Link>
                    <button className="playerDashBoard__logout" onClick={() => { logout() }}>Logout</button>
                </div>
            </div>
            <AddFunds onAddMoney={props.onUpdateUserBalance} />
        </div>
    );
}

export default withRouter(PlayerDashBoard);
