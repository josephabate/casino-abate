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
                <h1 className="home__title">CASINO GAMES</h1>
                <div className="home__wrapper">
                    <h2 className="home__user">Welcome Back {this.state.username},</h2>
                    <h2 className="home__money">You Have: ${this.state.money}</h2>
                </div>
                <div>
                    <div className="home__gameWrapper">
                        <GamePicker game="WAR" />
                        <GamePicker game="BLACKJACK" />
                    </div>
                    <div className="home__gameWrapper">
                        <GamePicker game="ROULETTE" />
                        <GamePicker game="SLOTS" />
                    </div>
                </div>

            </section>
        );
    }
}

export default Home;
