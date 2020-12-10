import React, { Component } from 'react';
import './BetModel.scss';
import chip1 from '../../assets/images/game-elements/chip1.png';
import chip5 from '../../assets/images/game-elements/chip5.png';
import chip10 from '../../assets/images/game-elements/chip10.png';
import chip25 from '../../assets/images/game-elements/chip25.png';
import chip50 from '../../assets/images/game-elements/chip50.png';
import chip100 from '../../assets/images/game-elements/chip100.png';


class BetModel extends Component {

    state = {
        display: false,
        bet: 0,
        error: ""
    }

    onCloseBetModel = () => {
        this.props.resetBet();
        this.setState({
            display: false,
            bet: 0
        });
    };

    //place the bet
    onSetBet = () => {
        if (this.state.bet !== 0) {
            //ratio name money
            let ratio = 0;
            if (!isNaN(this.props.betNumber)) {
                ratio = 36;
            } else if (this.props.betNumber.includes("2 TO 1") || this.props.betNumber.includes("12")) {
                ratio = 3;
            } else {
                ratio = 2;
            }

            this.props.onPlaceBet(ratio, this.props.betNumber, this.state.bet);
            this.onCloseBetModel();
        }
    }

    componentDidMount() {
        if (this.props.betNumber && this.props.canBet) {
            this.setState({
                display: true
            });
        }
    }

    componentDidUpdate(prevP, prevS) {
        if (prevS.display === this.state.display && this.props.betNumber && this.state.bet === 0 && this.props.canBet) {
            this.setState({
                display: true,
            });
        }
    }


    onBetMoney = (betAmount) => {

        const newAmount = betAmount + this.state.bet;
        if (newAmount > this.props.playerMoney) {
            //fix this later. when your bet is at $0 and you try to bet more than you have, it causes a crash
            /*this.setState({
                error: "You do not have enought money for this bet"                         //REFACTOR see if its worth your time to fix this...not really needed
            })*/
        } else {
            this.setState({
                bet: newAmount,
                error: ""
            });
        }
    }

    render() {
        return (
            <div
                className="BetModel"
                style={{ display: this.state.display ? "flex" : "none" }}
            >
                <h1 className="BetModel__title">PLACE YOUR BET ON</h1>
                <div className="BetModel__numWrapper">
                    <h2 className="BetModel__betNumber">{this.props.betNumber}</h2>
                </div>
                <div className="BetModel__betNError">
                    <span>{this.state.error}</span>
                    <div className="BetModel__betBox">
                        <h2>$<span>{this.state.bet}</span></h2>
                    </div>
                </div>
                <div>
                    <img onClick={() => {
                        this.onBetMoney(1)
                    }} src={chip1} alt="$1 bet" />
                    <img onClick={() => {
                        this.onBetMoney(5)
                    }} src={chip5} alt="$5 bet" />
                    <img onClick={() => {
                        this.onBetMoney(10)
                    }} src={chip10} alt="$10 bet" />
                    <img onClick={() => {
                        this.onBetMoney(25)
                    }} src={chip25} alt="$25 bet" />
                    <img onClick={() => {
                        this.onBetMoney(50)
                    }} src={chip50} alt="$50 bet" />
                    <img onClick={() => {
                        this.onBetMoney(100)
                    }} src={chip100} alt="$100 bet" />
                </div>
                <div>
                    <button className="BetModel__button" onClick={this.onSetBet}>PLACE BET</button>
                    <button className="BetModel__button" onClick={this.onCloseBetModel}>CLEAR</button>
                </div>
            </div>
        );
    }
}

export default BetModel;
