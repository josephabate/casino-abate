import React, { Component } from 'react';
import axios from 'axios'
import GamePicker from '../../components/GamePicker/GamePicker';
class Home extends Component {

    render() {
        return (
            <div>
                <h1>CASINO GAMES</h1>
                <div>
                    <GamePicker game="WAR"/>
                </div>
            </div>
        );
    }
}

export default Home;
