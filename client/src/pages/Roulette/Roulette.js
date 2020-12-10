import React, { Component } from 'react';
import BetModel from '../../components/BetModel/BetModel';
import BetScreen from '../../components/BetScreen/BetScreen';
import PlayerDashBoard from '../../components/PlayerDashBoard/PlayerDashBoard';
import RouletteTable from '../../components/RouletteTable/RouletteTable';
import RouletteWheel from '../../components/RouletteWheel/RouletteWheel';
import { v4 as uuidv4 } from 'uuid';
import { updateBalanceToSession } from '../../components/GlobalHelpers/AccountMoneyHandler';
import './Roulette.scss';

class Roulette extends Component {

    state = {
        user: { username: "", money: 0 },
        bets: [],
        number: "",
        currentBetNumber: "",
        canBet: true
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

    addWinnings = (money, id) => {
        //change bet collected state to true so you can only collect once
        let bets = this.state.bets;

        bets.forEach((el) => {
            if (el.id === id) {
                el.collected = true;
            }
        })

        let userData = this.state.user;
        userData.money += money;
        this.setState({
            user: { username: this.state.user.username, money: userData.money },
            bets: bets
        })

        //rewrite to session storage - imported method
        updateBalanceToSession(userData.money)
    }

    addBets = (ratio, name, money) => {
        //add new bet to list
        const newBets = this.state.bets;
        const bet = { id: uuidv4(), ratio: ratio, name: name, money: money, collected: false }
        newBets.push(bet);

        //subtract the players money
        let userData = this.state.user;
        userData.money -= money;

        //rewrite to session storage - imported method
        updateBalanceToSession(userData.money)

        this.setState({
            bets: newBets,
            user: { username: this.state.user.username, money: userData.money },
            currentBetNumber: ""
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

    resetNumber = () => {
        this.setState({
            number: "",
            bets: [],
            currentBetNumber: "",
            canBet: true
        })
    }

    getNumber = () => {
        const wheelNumber = Math.floor(Math.random() * 37);
        this.setState({
            number: wheelNumber,
            canBet: false
        })
    }

    render() {
        return (
            <div className="Roulette">
                <BetModel canBet={this.state.canBet} resetBet={this.resetBetNumber} betNumber={this.state.currentBetNumber} playerMoney={this.state.user.money} onPlaceBet={this.addBets} />
                <h1 className="Roulette__title">Roulette</h1>
                <div className="Roulette__gameScreen">
                    <div className="Roulette__leftCol">
                        {this.state.number ? <button onClick={this.resetNumber}>reset</button> : <button onClick={this.getNumber}>GET NUMBER</button>}
                        <RouletteWheel number={this.state.number} />
                        <BetScreen addWinnings={this.addWinnings} allBets={this.state.bets} wheelNumber={this.state.number} />
                    </div>
                    <div>
                        <RouletteTable onSetBetNumber={this.setBetNumber} />
                        <PlayerDashBoard username={this.state.user.username} money={this.state.user.money} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Roulette;
