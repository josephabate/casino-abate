import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PlayDeck from '../../components/PlayDeck/PlayDeck';
import PlayerDashBoard from '../../components/PlayerDashBoard/PlayerDashBoard';
import './War.scss';

import deck from '../../components/GlobalHelpers/CardImages';

import ribin1 from '../../assets/images/game-elements/suitRibin1.png';
import WarBet from '../../components/WarBet/WarBet';

class War extends Component {

    state = {
        user: {},
        currentBet: 0
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

    onClearBets = () => {
        //give user money back
        let newUser = this.state.user;
        newUser.money += this.state.currentBet;

        this.setState({
            user: newUser,
            currentBet: 0
        });
    }


    render() {
        return (
            <section className="War">
                <PlayDeck player="DEALER" />
                <div className="War__title-wrapper">
                    <img className="War__ribin" src={ribin1} alt="ribin" />
                    <h2 className="War__title">CASINO WAR</h2>
                    <h4 className="War__rule">$5 min</h4>
                    <h2 className="War__desc">PAYOUT 1 TO 1</h2>
                    <img className="War__ribin" src={ribin1} alt="ribin" />
                </div>
                <PlayDeck player="YOU" />
                <WarBet currentBet={this.state.currentBet} onBetMoney={this.onBetMoney} clearBets={this.onClearBets} />

                <PlayerDashBoard username={this.state.user.username} money={this.state.user.money} />
            </section>
        );
    }

}

export default withRouter(War);
