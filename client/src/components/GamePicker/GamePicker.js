import React from 'react';

import { withRouter } from "react-router-dom";

const GamePicker = (props) => {
    function onPlay(){
        props.history.push(`/${props.game.toLowerCase()}`);
    }

    return (
        <div>
           <h2>{props.game}</h2> 
           <button onClick={onPlay}>PLAY NOW</button>
        </div>
    );
}

export default withRouter(GamePicker);
