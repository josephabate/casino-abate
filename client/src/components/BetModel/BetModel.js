import React, { Component } from 'react';

class BetModel extends Component {

    state = {
        display: false
    }

    onCloseBetModel = () => {
        this.props.resetBet();
        this.setState({
            display: false
        });
    };

    //place the bet
    onSetBet = () => {
        this.onCloseBetModel();
    }

    componentDidMount() {
        if (this.props.betNumber) {
            this.setState({
                display: true
            });
        }
    }

    componentDidUpdate(prevP, prevS) {
        if (prevS.display === this.state.display && this.props.betNumber) {
            this.setState({
                display: true,
            });
        }
    }


    render() {
        return (
            <div
                className="BetModel"
                style={{ display: this.state.display ? "block" : "none" }}
            >
                The Bet Screen {this.props.betNumber}
            </div>
        );
    }
}

export default BetModel;
