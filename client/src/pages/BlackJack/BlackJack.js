import React, { Component } from 'react';
import PlayerDashBoard from '../../components/PlayerDashBoard/PlayerDashBoard';
import BlackJackBet from '../../components/BlackJackBet/BlackJackBet';
import BlackJackGameControls from '../../components/BlackJackGameControls/BlackJackGameControls';

import './BlackJack.scss';
import ribin1 from '../../assets/images/game-elements/suitRibin1.png';
import { updateBalanceToSession } from '../../components/GlobalHelpers/AccountMoneyHandler';
import { useHistory } from 'react-router';



class BlackJack extends Component {

    state = {
        user: {},
        currentBet: 0,
        dealer: {
            power: null,
            cards: [],
            bust: false
        },
        player: {
            power: null,
            cards: [],
            bust: false
        },
        playing: false
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

    onBetMoney = (betAmount) => {
        let bet = this.state.currentBet;
        let newUser = this.state.user;

        //take money from user for bets
        if (betAmount <= newUser.money && !this.state.playing) {
            newUser.money -= betAmount;
            bet += betAmount;

            this.setState({
                user: newUser,
                currentBet: bet
            });
        }
    }

    onClearBets = () => {
        //give user money back
        let newUser = this.state.user;
        newUser.money += this.state.currentBet;

        this.setState({
            user: newUser,
            currentBet: 0
        });
    }

    newCard = (num) => {
        const playerCard = num - 1;
        let power = num % 13;
        let isAce = false;

        if (power === 0 || power >= 10) {
            power = 10;//reset card face powers
        } else if (power === 1) {
            power = 11;//reset Ace power
            isAce = true;
        }

        const newCard = {
            isAce: isAce,
            cardPower: power,
            cardImg: playerCard,
        }

        return newCard;
    }

    //Game Methods
    onPlayBlackJack = () => {
        /**
         *  if (this.state.currentBet === 0) {
            return;
        }
         */
        /*
        this.setState({
            playing: true
        })
*/
        const card1 = this.newCard(Math.floor((Math.random() * 52) + 1)); 
        const card2 = this.newCard(Math.floor((Math.random() * 52) + 1));
        const cards = [card1, card2];
        const power = card1.cardPower + card2.cardPower
        const newPlayer = {
            power: power,
            cards: cards,
            bust: false
        }

        this.setState({
            player: newPlayer,
            playing: true
        })
        console.log("new game " + power);
    }

    onStay = () => {
        this.setState({
            playing: false
        })
    }

    onHit = () => {
        if(!this.state.player.bust && this.state.playing){
            const newCard = this.newCard(Math.floor((Math.random() * 52) + 1));

            let newPlayer = this.state.player;
            newPlayer.cards.push(newCard);
            newPlayer.power += newCard.cardPower;
            newPlayer.bust = (newPlayer.power >= 21)
            
            //if there is an ace when u bust set it to 1
            if(newPlayer.bust){
                newPlayer.cards.forEach((card)=>{
                    if(card.isAce && card.cardPower === 11){
                        card.cardPower = 1;
                        newPlayer.power -= 10;
                        newPlayer.bust = (newPlayer.power >= 21)
                        return;
                    }
                })
            }

            this.setState({
                player: newPlayer
            })
            console.log(newPlayer.power)
        }
    }


    render() {
        return (
            <div className="black-jack">
                <section>
                    <h2>Black Jack</h2>
                    <h4 className="black-jack__rule">$5 min</h4>
                    <h2 className="black-jack__desc">PAYOUT 1 TO 1</h2>
                    <img className="black-jack__ribin" src={ribin1} alt="ribin" />
                </section>
                <img className="black-jack__ribin" src={ribin1} alt="ribin" />
                <div className="black-jack__bet-wrapper">
                    <BlackJackBet currentBet={this.state.currentBet} onBetMoney={this.onBetMoney} />
                    <BlackJackGameControls onClearBets={this.onClearBets} onPlayGame={this.onPlayBlackJack} onHit={this.onHit}/>
                </div>
                <PlayerDashBoard username={this.state.user.username} money={this.state.user.money} />
            </div>
        );
    }
}

export default BlackJack;
