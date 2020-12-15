import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PlayDeck from '../../components/PlayDeck/PlayDeck';
import PlayerDashBoard from '../../components/PlayerDashBoard/PlayerDashBoard';

import './War.scss';
import ribin1 from '../../assets/images/game-elements/suitRibin1.png';
import WarBet from '../../components/WarBet/WarBet';
import { updateBalanceToSession } from '../../components/GlobalHelpers/AccountMoneyHandler';


class War extends Component {

    state = {
        user: {},
        currentBet: 0,
        dealer: {
            power: null,
            img: null
        },
        player: {
            power: null,
            img: null
        },
        endGameMessage: ""
    }

    constructor(props) {
        super(props);
        if (!!!sessionStorage.getItem("user")) {
            this.props.history.push('/registration');
        }
    }

    componentDidMount() {
        if (!!sessionStorage.getItem("user")) {
            const userData = JSON.parse(sessionStorage.getItem("user"))
            this.setState({
                user: { username: userData.username, money: userData.money }
            })
        }
    }

    onBetMoney = (betAmount) => {
        let bet = this.state.currentBet;
        let newUser = this.state.user;

        //take money from user for bets
        if (betAmount <= newUser.money) {
            newUser.money -= betAmount;
            bet += betAmount;

            this.setState({
                user: newUser,
                currentBet: bet,
                endGameMessage: ""
            });
        }
    }

    onClearBets = () => {
        //give user money back
        let newUser = this.state.user;
        newUser.money += this.state.currentBet;

        this.setState({
            user: newUser,
            currentBet: 0
        });
    }

    onPlayWar = () => {
        if (this.state.currentBet === 0) {
           return;
        }
        let betAmount = this.state.currentBet;

        //get card number from 1-52
        const playerPowerNumberRaw = Math.floor((Math.random() * 52) + 1);
        const dealerPowerNumberRaw = Math.floor((Math.random() * 52) + 1);

        //convert 52 to the right card and power
        const playerCard = playerPowerNumberRaw - 1;
        let playerPower = playerPowerNumberRaw % 13;
        if (playerPower === 0) {
            playerPower = 13;//reset King power
        } else if (playerPower === 1) {
            playerPower = 14;//reset Ace power
        }
        
        const dealerCard = dealerPowerNumberRaw - 1;
        let dealerPower = dealerPowerNumberRaw % 13;
        if (dealerPower === 0) {
            dealerPower = 13;//reset King power
        } else if (dealerPower === 1) {
            dealerPower = 14;//reset Ace power
        }

        let endGame = ""
        if (playerPower > dealerPower) {
            betAmount *= 2;
            endGame = `YOU WIN $${betAmount}`;
        } else if (playerPower === dealerPower) {
            endGame = `WAR - TIE`;
        } else {
            endGame = `YOU LOSE`;
            betAmount = 0;
        }

        this.setState({
            currentBet: 0,
            dealer: {
                power: dealerPower,
                img: dealerCard
            },
            player: {
                power: playerPower,
                img: playerCard
            },
            endGameMessage: endGame
        });

        this.updateMoney(betAmount)
    }

    updateMoney = (betAmount) =>{
        let newUser = this.state.user;

        newUser.money += betAmount;

        this.setState({
            user: newUser,
        });

        //rewrite to session storage - imported method
        updateBalanceToSession(newUser.money)
    }

    render() {
        return (
            <section className="War">

                <div className="War__title-wrapper">
                    <h2 className="War__title">CASINO WAR</h2>
                    <h4 className="War__rule">$5 min</h4>
                    <h2 className="War__desc">PAYOUT 1 TO 1</h2>
                    <img className="War__ribin" src={ribin1} alt="ribin" />
                </div>
                <div className="War__game">
                    <PlayDeck player="YOU" image={this.state.player.img} />
                    <h1>{this.state.endGameMessage}</h1>
                    <PlayDeck player="DEALER" image={this.state.dealer.img} />
                </div>

                <img className="War__ribin" src={ribin1} alt="ribin" />
                <WarBet currentBet={this.state.currentBet} onBetMoney={this.onBetMoney} clearBets={this.onClearBets} playGame={this.onPlayWar} />

                <PlayerDashBoard onUpdateUserBalance={this.updateMoney} username={this.state.user.username} money={this.state.user.money} />
            </section>
        );
    }

}

export default withRouter(War);
