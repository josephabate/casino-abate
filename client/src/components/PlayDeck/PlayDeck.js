import React from 'react';
import './PlayDeck.scss'
import deck from '../../components/GlobalHelpers/CardImages';
const PlayDeck = (props) => {
    return (
        <div>
            <h2>{props.player}</h2>
            <div className="PlayDeck">
                {(props.image)? <img src={deck[parseInt(props.image)]} alt="card" className="PlayDeck__card" /> : <></>}
            </div>
        </div>
    );
}

export default PlayDeck;
