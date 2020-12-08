import React from 'react';
import './PlayerDashBoard.scss';

const PlayerDashBoard = ({username, money}) => {
    return (
        <div className="playerDashBoard">
            <h2 className="playerDashBoard__title">{username}'s dashboard</h2>
            <h2>Your money: ${money}</h2>
        </div>
    );
}

export default PlayerDashBoard;
