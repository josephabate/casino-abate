import React from 'react';

import { withRouter } from "react-router-dom";

const GamePicker = (props) => {
    function onPlay(){
        console.log(`/${props.game.toLowerCase()}`)
        console.log("play game");
        props.history.push(`/war`);
    }

    return (
        <div>
           <h2>{props.game}</h2> 
           <button onClick={onPlay}>PLAY NOW</button>
        </div>
    );
}

export default withRouter(GamePicker);
