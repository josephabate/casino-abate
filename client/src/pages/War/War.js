import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PlayDeck from '../../components/PlayDeck/PlayDeck';
import PlayerDashBoard from '../../components/PlayerDashBoard/PlayerDashBoard';
import './War.scss';

class War extends Component {

    state = {
        user: {}
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


    render() {
        return (
            <section className="War">
                <PlayDeck />
                <div className="War__title-wrapper">
                    <h1 className="War__title">CASINO WAR</h1>
                    <h3 className="War__desc">PAYOUT 1 TO 1</h3>
                </div>
                <PlayDeck />
                <h1>BET</h1>
                <button>REPEAT BET</button>
                <div>
                    <button>CLEAR</button>
                    <button>LEAVE TABLE</button>
                </div>
                <PlayerDashBoard username={this.state.user.username} money={this.state.user.money} />
            </section>
        );
    }

}

export default withRouter(War);
