import React from 'react';
import { withRouter } from "react-router-dom";
import './GamePicker.scss'

import cardCover from '../../assets/images/gameCovers/card-game-cover.png'
import rouletteCover from '../../assets/images/gameCovers/roulette-cover.png'
import slotsCover from '../../assets/images/gameCovers/slots-cover.png'

const GamePicker = (props) => {

    function onPlay() {
        props.history.push(`/${props.game.toLowerCase()}`);
    }

    function imagePicker() {
        if (props.game.toLowerCase().includes('blackjack') || props.game.toLowerCase().includes('war')) {
            return cardCover;
        }
        else if (props.game.toLowerCase().includes('roulette')) {
            return rouletteCover;
        } else {
            return slotsCover;
        }
    }

    return (
        <div className="gamePicker">
            <div className="gamePicker__wrapper" style={{backgroundImage: `url(${imagePicker()})`}}>
                <h2 className="gamePicker__title">{props.game}</h2>
            </div>

            <button className="gamePicker__play" onClick={onPlay}>PLAY NOW</button>
        </div>
    );
}

export default withRouter(GamePicker);
