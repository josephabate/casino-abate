import React, { Component } from 'react';
import BetModel from '../../components/BetModel/BetModel';
import BetScreen from '../../components/BetScreen/BetScreen';
import PlayerDashBoard from '../../components/PlayerDashBoard/PlayerDashBoard';
import RouletteTable from '../../components/RouletteTable/RouletteTable';
import RouletteWheel from '../../components/RouletteWheel/RouletteWheel';
import './Roulette.scss';

class Roulette extends Component {

    state = {
        user: { username: "", money: 0 },
        bets: [],
        number: "",
        currentBetNumber: ""
    }


    constructor(props) {
        super(props);
        if (!!!sessionStorage.getItem("user")) {
            this.props.history.push('/registration');
        }
    }

    componentDidMount() {
        const userData = JSON.parse(sessionStorage.getItem("user"))
        console.log(userData);
        this.setState({
            user: { username: userData.username, money: userData.money }
        })
    }

    addBets = (ratio, name, money) => {
        //add new bet to list
        const newBets = this.state.bets;
        const bet = { ratio: ratio, name: name, money: money }
        newBets.push(bet);

        //subtract the players money
        let userData = this.state.user;
        userData.money = - money;

        sessionStorage.setItem("user", JSON.stringify(userData));

        this.setState({
            bets: newBets,
            user: { username: this.state.user.username, money: userData.money }
        })
    }

    resetBetNumber = () => {
        this.setState({
            currentBetNumber: ""
        });
    }

    setBetNumber = (num) => {
        this.setState({
            currentBetNumber: num
        })
    }

    render() {
        return (
            <div className="Roulette">
                <BetModel resetBet={this.resetBetNumber} betNumber={this.state.currentBetNumber}/>
                <h1 className="Roulette__title">Roulette</h1>
                <div className="Roulette__gameScreen">
                    <div>
                        <RouletteWheel number={this.state.number} />
                        <BetScreen />
                    </div>
                    <div>
                        <RouletteTable onSetBetNumber={this.setBetNumber}/>
                        <PlayerDashBoard username={this.state.user.username} money={this.state.user.money} />
                    </div>
                </div>

            </div>
        );
    }
}

export default Roulette;
