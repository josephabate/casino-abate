import React, { Component } from 'react';
import PlayerDashBoard from '../../components/PlayerDashBoard/PlayerDashBoard';
import BlackJackBet from '../../components/BlackJackBet/BlackJackBet';
import BlackJackGameControls from '../../components/BlackJackGameControls/BlackJackGameControls';

import './BlackJack.scss';
import ribin1 from '../../assets/images/game-elements/suitRibin1.png';
import { updateBalanceToSession } from '../../components/GlobalHelpers/AccountMoneyHandler';



class BlackJack extends Component {

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
        }
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
                currentBet: bet
            });
        }
    }



    render() {
        return (
            <div className="black-jack">
                <section>
                    <h2>Black Jack</h2>
                    <h4 className="black-jack__rule">$5 min</h4>
                    <h2 className="black-jack__desc">PAYOUT 1 TO 1</h2>
                    <img className="black-jack__ribin" src={ribin1} alt="ribin" />
                </section>
                <img className="black-jack__ribin" src={ribin1} alt="ribin" />
                <div className="black-jack__bet-wrapper">
                    <BlackJackBet currentBet={this.state.currentBet} onBetMoney={this.onBetMoney} />
                    <BlackJackGameControls />
                </div>
                <PlayerDashBoard username={this.state.user.username} money={this.state.user.money} />
            </div>
        );
    }
}

export default BlackJack;
