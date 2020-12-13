import React, { Component } from 'react';
import Payouts from '../../components/Payouts/Payouts';
import PlayerDashBoard from '../../components/PlayerDashBoard/PlayerDashBoard';
import SlotBets from '../../components/SlotBets/SlotBets';
import SlotMachine from '../../components/SlotMachine/SlotMachine';


class Slots extends Component {
    
    state={
        user: { username: "", money: 0 },
        bet: 0,
        payouts: [],
        canBet: true
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

    componentDidMount(){
        if (!!sessionStorage.getItem("user")) {
            const userData = JSON.parse(sessionStorage.getItem("user"))
            this.setState({
                user: { username: userData.username, money: userData.money }
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Slots</h1>
            <SlotMachine bet={this.state.bet} onPayOuts={this.setPayOut}/>
            <Payouts pay={this.state.payouts} />
            <SlotBets onBet={this.onUpdateBet}/>
            <PlayerDashBoard username={this.state.user.username} money={this.state.user.money} />
            </div>
        );
    }
}

export default Slots;
