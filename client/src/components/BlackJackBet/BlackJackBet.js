import './BlackJackBet.scss';

import React from 'react';
import chip5 from '../../assets/images/game-elements/chip5.png';
import chip10 from '../../assets/images/game-elements/chip10.png';
import chip25 from '../../assets/images/game-elements/chip25.png';
import chip50 from '../../assets/images/game-elements/chip50.png';
import chip100 from '../../assets/images/game-elements/chip100.png';

const BlackJackBet = (props) => {
    return (
        <div className="black-jack-bet">
            <div>
                    <img onClick={() => {
                        this.props.onBetMoney(5)
                    }} src={chip5} alt="$5 bet" />
                    <img onClick={() => {
                        this.props.onBetMoney(10)
                    }} src={chip10} alt="$10 bet" />
                    <img onClick={() => {
                        this.props.onBetMoney(25)
                    }} src={chip25} alt="$25 bet" />
                    <img onClick={() => {
                        this.props.onBetMoney(50)
                    }} src={chip50} alt="$50 bet" />
                    <img onClick={() => {
                        this.props.onBetMoney(100)
                    }} src={chip100} alt="$100 bet" />
                </div>
        </div>
    );
}

export default BlackJackBet;
