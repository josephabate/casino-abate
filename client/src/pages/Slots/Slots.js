import React, { Component } from 'react';
import Payouts from '../../components/Payouts/Payouts';
import SlotMachine from '../../components/SlotMachine/SlotMachine';


class Slots extends Component {
    
    state={
        user: { username: "", money: 0 },
        bet: 0,
        payouts: []
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

    render() {
        return (
            <div>
                <h1>Slots</h1>
            <SlotMachine bet={this.state.bet} onPayOuts={this.setPayOut}/>
            <Payouts pay={this.state.payouts} />
            </div>
        );
    }
}

export default Slots;
