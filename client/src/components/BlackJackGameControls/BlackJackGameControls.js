import React from 'react';
import './BlackJackGameControls.scss';

const BlackJackGameControls = () => {
    return (
        <div className="BJ-controls">
            <button className="BJ-controls__button">PLAY</button>
            <button className="BJ-controls__button">CLEAR</button>
            <button className="BJ-controls__button">HIT</button>
            <button className="BJ-controls__button">STAY</button>
        </div>
    );
}

export default BlackJackGameControls;
