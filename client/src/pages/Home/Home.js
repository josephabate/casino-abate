import React, { Component } from 'react';
import GamePicker from '../../components/GamePicker/GamePicker';
import './Home.scss';

class Home extends Component {
    state = {
        username: "",
        money: 0
    }

    componentDidMount() {
        if (!!sessionStorage.getItem("user")) {
            console.log()
            const user = JSON.parse(sessionStorage.getItem("user"));
            this.setState({
                username: user.username,
                money: user.money
            })
        }
    }

    render() {
        return (
            <section className="home">
                <h1>CASINO GAMES</h1>
                <h2>Welcome Back {this.state.username}</h2>
                <h3>Your Money: ${this.state.money}</h3>
                <div>
                    <div className="gameWrapper">
                        <GamePicker game="WAR" />
                        <GamePicker game="ROULETTE" />
                    </div>
                    <div className="gameWrapper">
                        <GamePicker game="BLACKJACK" />
                        <GamePicker game="SLOTS" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;
