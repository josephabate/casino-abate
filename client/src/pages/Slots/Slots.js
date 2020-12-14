import React, { Component } from 'react';
import Payouts from '../../components/Payouts/Payouts';
import PlayerDashBoard from '../../components/PlayerDashBoard/PlayerDashBoard';
import SlotBets from '../../components/SlotBets/SlotBets';
import SlotMachine from '../../components/SlotMachine/SlotMachine';

import './Slots.scss';

//helpers
import { updateBalanceToSession } from '../../components/GlobalHelpers/AccountMoneyHandler';


class Slots extends Component {

    state = {
        user: {},
        bet: 0,
        payouts: [],
        canBet: true,
        totalWinnings: 0
    }

    constructor(props) {
        super(props);
        if (!!!sessionStorage.getItem("user")) {
            this.props.history.push('/registration');
        }
    }

    setPayOut = (newPayouts) => {
        this.setState({
            payouts: newPayouts
        })
    }

    onUpdateBet = (betAmount) => {
        this.setState({
            bet: betAmount
        });
    }

    componentDidMount() {
        if (!!sessionStorage.getItem("user")) {
            const userData = JSON.parse(sessionStorage.getItem("user"))
            this.setState({
                user: { username: userData.username, money: userData.money }
            })
        }
    }

    removeBetFromTotal = () => {
        let newUser = this.state.user;
        newUser.money -= this.state.bet;
        this.setState({ user: newUser });
        updateBalanceToSession(newUser.money)
    }

    addWinningsToUsersAccount = (winnings) => {

        let newWinnings = this.state.totalWinnings;
        newWinnings += winnings;

        //remove first element from payouts to avoid crashing
        let newPayouts;
        if (this.state.payouts.length === 1) {
            newPayouts = [];
        }
        else if (this.state.payouts.length >= 2) {
            newPayouts = this.state.payouts.shift();
        }


        let newUser = this.state.user;

        newUser.money += winnings;
        this.setState({ user: newUser, payouts: newPayouts, totalWinnings: newWinnings });
        updateBalanceToSession(newUser.money)
    }

    render() {
        return (
            <div className="Slots">
                <div>
                    <div className="Slots__winnings-wrapper">
                        <h2 className="Slots__winnings">TOTAL WINNINGS: {` $${this.state.totalWinnings}`}</h2>
                    </div>
                    <SlotMachine bet={this.state.bet} onPayOuts={this.setPayOut} onPlaySpin={this.removeBetFromTotal} />
                </div>
                <Payouts pay={this.state.payouts} addWinnigns={this.addWinningsToUsersAccount} />
                <SlotBets onBet={this.onUpdateBet} />
                <PlayerDashBoard username={this.state.user.username} money={this.state.user.money} />
            </div>
        );
    }
}

export default Slots;
