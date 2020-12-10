import React from 'react';
import './BlackJackGameControls.scss';

const BlackJackGameControls = (props) => {
    return (
        <div className="BJ-controls">
            <button className="BJ-controls__button" onClick={props.onPlayGame}>PLAY</button>
            <button className="BJ-controls__button" onClick={props.onClearBets}>CLEAR</button>
            <button className="BJ-controls__button" onClick={props.onHit}>HIT</button>
            <button className="BJ-controls__button" onClick={props.onStay}>STAY</button>
        </div>
    );
}

export default BlackJackGameControls;
