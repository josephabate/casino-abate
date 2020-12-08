import React, { Component } from 'react';
import GamePicker from '../../components/GamePicker/GamePicker';

class Home extends Component {
state = {
    username: "",
    money: 0
}

componentDidMount(){
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
            <div>
                <h1>CASINO GAMES</h1>
        <h2>Your Money: ${this.state.money}</h2>
                <div>
                    <GamePicker game="WAR"/>
                    <GamePicker game="ROULETTE"/>
                    <GamePicker game="BLACKJACK"/>
                    <GamePicker game="SLOTS"/>
                </div>
            </div>
        );
    }
}

export default Home;
