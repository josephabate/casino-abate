import React, { Component } from 'react';
import PlayerDashBoard from '../../components/PlayerDashBoard/PlayerDashBoard';
import BlackJackBet from '../../components/BlackJackBet/BlackJackBet';
import BlackJackGameControls from '../../components/BlackJackGameControls/BlackJackGameControls';

import './BlackJack.scss';
import ribin1 from '../../assets/images/game-elements/suitRibin1.png';
import { updateBalanceToSession } from '../../components/GlobalHelpers/AccountMoneyHandler';
import BlackJackCardDisplay from '../../components/BlackJackCardDisplay/BlackJackCardDisplay';

class BlackJack extends Component {

    state = {
        user: {},
        currentBet: 0,
        dealer: {
            power: 0,
            cards: [],
            bust: false
        },
        player: {
            power: 0,
            cards: [],
            bust: false
        },
        playing: false,
        endGameMessage: ""
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
        if (!this.state.playing) {
            let newUser = this.state.user;
            newUser.money += this.state.currentBet;

            this.setState({
                user: newUser,
                currentBet: 0
            });
        }
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
        //must have money on bet to play
        if (this.state.currentBet === 0) {
            return;
        }

        //if a game is already in sesson dont start a new one
        if (this.state.playing) {
            return;
        }
        //setting up player card
        const card1 = this.newCard(Math.floor((Math.random() * 52) + 1));
        const card2 = this.newCard(Math.floor((Math.random() * 52) + 1));
        const cards = [card1, card2];
        const power = card1.cardPower + card2.cardPower
        const newPlayer = {
            power: power,
            cards: cards,
            bust: false
        }

        //setting up dealer card
        const dealerCard = this.newCard(Math.floor((Math.random() * 52) + 1));
        const dealerCards = [dealerCard];
        const dealerPower = dealerCard.cardPower
        const newDealer = {
            power: dealerPower,
            cards: dealerCards,
            bust: false
        }

        this.setState({
            player: newPlayer,
            dealer: newDealer,
            playing: true,
            endGameMessage: ""
        })

    }

    dealerPlay = () => {
        if (this.state.dealer.power >= 16) {
            this.whoWins();
            return;
        }
        setTimeout(() => {
            //get new card and add to new dealer data
            const dealerCard = this.newCard(Math.floor((Math.random() * 52) + 1));
            let dealerCards = this.state.dealer.cards;
            dealerCards.push(dealerCard);
            let dealerPower = this.state.dealer.power;
            dealerPower += dealerCard.cardPower;
            let dealerBust = dealerPower > 21;

            //check if over 21 and have an ace
            if (dealerBust) {
                dealerCards.forEach((card) => {
                    if (card.isAce && card.cardPower === 11) {
                        card.cardPower = 1;
                        dealerPower -= 10;
                        dealerBust = (dealerCards.power >= 21)
                        return;
                    }
                })
            }

            //make the new dealer object
            const dealer = {
                power: dealerPower,
                cards: dealerCards,
                bust: dealerBust
            }

            this.setState({
                dealer: dealer
            }, () => {
                this.dealerPlay()
            });
        }, 600);

    }

    onStay = () => {
        if (this.state.playing) {
            this.setState({
                playing: false
            })
            this.dealerPlay();
        }
    }

    whoWins = () => {
        let message = ""
        let bet = this.state.currentBet;
        let userMoney = this.state.user;
        //set state and make a var for if you loose or win and then rest it when you start a gaem
        //it will be used for the card are and remove the "- total: #" and replace it witht win or lose 
        if (this.state.player.bust) {
            message = "YOU LOSE"
            bet = 0;
        }
        else if (this.state.dealer.bust) {
            message = `YOU WIN + $${bet}`
            bet = bet * 2;
        }
        else if (this.state.player.power > this.state.dealer.power) {
            message = `YOU WIN + $${bet}`
            bet = bet * 2;
        }
        else if (this.state.player.power === this.state.dealer.power) {
            message = "YOU LOSE"
            bet = 0;
        }
        else {
            message = "YOU LOSE"
            bet = 0;
        }

        userMoney.money += bet;

        updateBalanceToSession(userMoney.money);

        this.setState({
            endGameMessage: message,
            currentBet: 0,
            user: userMoney
        });
    }

    onHit = () => {
        if (!this.state.player.bust && this.state.playing) {
            const newCard = this.newCard(Math.floor((Math.random() * 52) + 1));

            let newPlayer = this.state.player;
            newPlayer.cards.push(newCard);
            newPlayer.power += newCard.cardPower;
            newPlayer.bust = (newPlayer.power >= 21)

            //if there is an ace when u bust set it to 1
            if (newPlayer.bust) {
                newPlayer.cards.forEach((card) => {
                    if (card.isAce && card.cardPower === 11) {
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
            if (newPlayer.bust) {
                this.setState({
                    playing: false
                })
                this.whoWins();
            }
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
                <div className="black-jack__playing-area">
                    <BlackJackCardDisplay total={this.state.player.power} cards={this.state.player.cards} who="YOU" />
                    <h1>{this.state.endGameMessage}</h1>
                    <BlackJackCardDisplay total={this.state.dealer.power} cards={this.state.dealer.cards} who="DEALER" />
                </div>
                <img className="black-jack__ribin" src={ribin1} alt="ribin" />
                <div className="black-jack__bet-wrapper">
                    <BlackJackBet currentBet={this.state.currentBet} onBetMoney={this.onBetMoney} />
                    <BlackJackGameControls onClearBets={this.onClearBets} onPlayGame={this.onPlayBlackJack} onHit={this.onHit} onStay={this.onStay} />
                </div>
                <PlayerDashBoard username={this.state.user.username} money={this.state.user.money} />
            </div>
        );
    }
}

export default BlackJack;
