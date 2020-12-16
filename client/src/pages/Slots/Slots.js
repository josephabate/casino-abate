import React, { Component } from 'react';
import PlayerDashBoard from '../../components/PlayerDashBoard/PlayerDashBoard';
import SlotBets from '../../components/SlotBets/SlotBets';
import SlotMachine from '../../components/SlotMachine/SlotMachine';

import './Slots.scss';

//helpers
import { updateBalanceToSession } from '../../components/GlobalHelpers/AccountMoneyHandler';
import SlotsRules from '../../components/SlotsRules/SlotsRules';


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
        this.setState({ user: newUser, totalWinnings: 0 });
        updateBalanceToSession(newUser.money)
    }

    addWinningsToUsersAccount = (winnings) => {
        let newWinnings = this.state.totalWinnings;
        newWinnings = winnings + newWinnings;

        //remove first element from payouts to avoid crashing
        let newPayouts = this.state.payouts;
        for (let i = 0; i < newPayouts.length; i++) {
            if (!newPayouts[i].paid) {
                newPayouts[i].paid = true;
                break;
            }
        }


        let newUser = this.state.user;

        newUser.money += winnings;
        this.setState({ user: newUser, payouts: newPayouts, totalWinnings: newWinnings });
        updateBalanceToSession(newUser.money)
    }

    addFunds = (funds) => {
        let newUser = this.state.user;
        newUser.money += funds;
        this.setState({ user: newUser });
        updateBalanceToSession(newUser.money)
    }

    async componentDidUpdate() {
        let pay = this.state.payouts;
        for (let i = 0; i < pay.length; i++) {
            if (!pay[i].paid) {
                await this.addWinningsToUsersAccount(pay[i].amount);
            }
        }
    }

    render() {
        return (
            <div className="Slots">
                <div>
                    <div className="Slots__winnings-wrapper">
                        <h2 className="Slots__winnings">TOTAL WINNINGS: {` $${this.state.totalWinnings}`}</h2>
                    </div>
                    <div className="Slots__game-wrapper">
                        <SlotsRules />
                        <SlotMachine bet={this.state.bet} onPayOuts={this.setPayOut} onPlaySpin={this.removeBetFromTotal} playerMoney={this.state.user.money} />
                    </div>
                </div>
                <SlotBets onBet={this.onUpdateBet} />
                <PlayerDashBoard onUpdateUserBalance={this.addFunds} username={this.state.user.username} money={this.state.user.money} />
            </div>
        );
    }
}

export default Slots;
