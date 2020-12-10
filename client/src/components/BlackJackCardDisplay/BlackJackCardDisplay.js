import React from 'react';
import './BlackJackCardDisplay.scss';
import deck from '../../components/GlobalHelpers/CardImages';
import { v4 as uuidv4 } from 'uuid';

const BlackJackCardDisplay = (props) => {
    return (
        <div className="blackJackCardDisplay">
            <div>
    <h3>{props.who} - TOTAL: { (props.total > 21)? props.total + " BUST!" : props.total } </h3>
            </div>
            <div>
                {props.cards.map((card)=>{
                    return <img key={uuidv4} src={deck[parseInt(card.cardImg)]} alt="card" className="blackJackCardDisplay__card" />
                })}
            </div>
        </div>
    );
}

export default BlackJackCardDisplay;
