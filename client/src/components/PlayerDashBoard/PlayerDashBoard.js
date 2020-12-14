import React from 'react';
import './PlayerDashBoard.scss';
import { Link } from 'react-router-dom';

const PlayerDashBoard = ({username, money}) => {
    return (
        <div className="playerDashBoard">
            <h2 className="playerDashBoard__title">{username}'s DASHBOARD</h2>
            <h2>Your money: ${money}</h2>
            <Link to="/">Back To Home</Link>
        </div>
    );
}

export default PlayerDashBoard;
