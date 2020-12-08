import React, { Component } from 'react';
import BetScreen from '../../components/BetScreen/BetScreen';
import PlayerDashBoard from '../../components/PlayerDashBoard/PlayerDashBoard';
import RouletteTable from '../../components/RouletteTable/RouletteTable';
import './Roulette.scss';

class Roulette extends Component {

    state = {
        user: { username: "", money: 0 },
        bets: []
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

    render() {
        return (
            <div className="Roulette">
                <h1 className="Roulette__title">Roulette</h1>
                <div className="Roulette__gameScreen">
                    <BetScreen />
                    <div>
                        <RouletteTable />
                    </div>
                </div>
                <PlayerDashBoard username={this.state.user.username} money={this.state.user.money} />
            </div>
        );
    }
}

export default Roulette;
