import './SlotMachine.scss';
import { v4 as uuidv4 } from 'uuid';
import React, { Component } from 'react';
import SlotsIcon from '../SlotsIcon/SlotsIcon';

class SlotMachine extends Component {
    state = {
        slots: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        interval: 0,
        iconCounter: {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0,
            "6": 0,
            "7": 0,
            "8": 0,
            "9": 0,
            "10": 0,
        },
        winners: [],
        payouts: [],
        winner: false,
        canSpin: true,
        getOutOfUntilWin: true
    }

    //Generates slot number
    randomNumber = (min, max) => {
        let number = Math.floor(Math.random() * (max - min)) + min;
        if (number <= 120) { number = 0; }
        else if (number <= 240) { number = 1; }
        else if (number <= 360) { number = 2; }
        else if (number <= 480) { number = 3; }
        else if (number <= 600) { number = 4; }
        else if (number <= 720) { number = 5; }
        else if (number <= 800) { number = 6; }
        else if (number <= 860) { number = 7; }
        else if (number <= 920) { number = 8; }
        else if (number <= 960) { number = 9; }
        else { number = 10; }

        let isWinner = false
        return { isWinner: isWinner, number: number }
    }

    //sets the slot machine
    setSlotMachineNumbers = () => {
        let newSlot = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]

        for (let i = 0; i < newSlot.length; i++) {
            for (let x = 0; x < newSlot[i].length; x++) {
                newSlot[i][x] = this.randomNumber(0, 1000)
            }
        }

        this.setState({
            slots: newSlot,
            interval: this.state.interval + 1
        })
    }

    //makes new slot render
    goOnce = () => {
        if (this.state.canSpin && this.props.playerMoney > 0 && this.props.bet > 0) {
            this.props.onPlaySpin();
            this.runRound();
            this.setState({
                canSpin: false
            });
        }
    }

    runRound = () => {
        this.setState({ payouts: [] });
        if (this.props.bet === 0) {
            return;
        }
        this.setSlotMachineNumbers();

        if (this.state.interval < 10) {

            setTimeout(() => {
                this.runRound()
            }, 100);
        } else {
            this.checkForWinner();
            this.setState({
                interval: 0,
                canSpin: true
            });
        }
    }

    goUntilWin = () => {
        if (this.props.bet > 0) {
            this.setState({
                getOutOfUntilWin: false
            })
            if (!this.state.canSpin) {
                this.setState({
                    getOutOfUntilWin: true
                })
            }
            if (this.state.canSpin && this.props.playerMoney > 0) {
                this.setState({ winner: false, payouts: [], interval: 0, canSpin: false }, this.setNewSlot);
            }
        }
    }

    //makes new slot render
    setNewSlot = () => {
        if (this.state.interval === 1) {
            this.props.onPlaySpin();
        }
        if (this.props.bet === 0 || this.state.getOutOfUntilWin) {
            this.setState({
                canSpin: true,
                getOutOfUntilWin: true 
            })
            return;
        }

        this.setSlotMachineNumbers();

        if (this.state.interval < 8) {
            setTimeout(() => {
                this.setNewSlot()
            }, 80);
        } else {
            this.checkForWinner();
            this.setState({
                interval: 0
            }, () => {
                setTimeout(() => {
                    this.setState({
                        winner: false, payouts: []
                    })
                    if(this.props.playerMoney > 0){
                        this.setNewSlot()
                    }
                    
                }, 1000)
            });
        }
    }

    checkForWinner = () => {
        this.findWinners(this.countSlotIcons());
    }

    findWinners = (icons) => {
        const newWinners = [];
        for (let i = 0; i < 11; i++) {
            if ((icons[i] >= 5 && i > 6) || (icons[i] >= 6 && i === 6) || (icons[i] >= 7)) {
                newWinners.push({ "number": i, "count": icons[i] });
            }
        }
        if (newWinners.length > 0) {
            this.setState({
                winner: true,
                winners: newWinners
            }, () => { this.givePayOuts() });
        }
    }

    /** 6           12           18           24
* 1 (120 <)    5           15          25          50
* to 
* 6 (720 <)    5           15          25          50
* 
* 7 (805 <)    100.0       120.0       135.0       150.0
* 8 (865 <)    125.0       150.0       175.0       200.0
* 9 (915 <)    150.0       200.0       350.0       400.0
* 10 (955 <)   250.0       300.0       500.0       800.0
* 11 ( <)   500.0       700.0       800.0       1000.0
* 
* 0 - 1000
* 
*/
    givePayOuts = () => {
        const winners = this.state.winners;
        const bet = this.props.bet;
        const payouts = [];

        let multiplier;
        let amount;
        let number;
        let count;

        for (let i = 0; i < winners.length; i++) {
            if (winners[i].number <= 5) {
                if (winners[i].count >= 10) {
                    multiplier = 6;
                }
                else if (winners[i].count >= 9) {
                    multiplier = 4;
                }
                else if (winners[i].count >= 8) {
                    multiplier = 3;
                }
                else if (winners[i].count >= 7) {
                    multiplier = 2;
                }
            }
            else if (winners[i].number === 6) {
                if (winners[i].count >= 10) {
                    multiplier = 15;
                }
                else if (winners[i].count >= 8) {
                    multiplier = 10;
                }
                else if (winners[i].count >= 7) {
                    multiplier = 8;
                }
                else if (winners[i].count >= 6) {
                    multiplier = 5;
                }
            }
            else if (winners[i].number === 7) {
                if (winners[i].count >= 8) {
                    multiplier = 20;
                }
                else if (winners[i].count >= 7) {
                    multiplier = 15;
                }
                else if (winners[i].count >= 6) {
                    multiplier = 10;
                }
                else if (winners[i].count >= 5) {
                    multiplier = 8;
                }
            }
            else if (winners[i].number === 8) {
                if (winners[i].count >= 8) {
                    multiplier = 40;
                }
                else if (winners[i].count >= 7) {
                    multiplier = 25;
                }
                else if (winners[i].count >= 6) {
                    multiplier = 15;
                }
                else if (winners[i].count >= 5) {
                    multiplier = 10;
                }
            }
            if (winners[i].number === 9) {
                if (winners[i].count >= 8) {
                    multiplier = 80;
                }
                else if (winners[i].count >= 7) {
                    multiplier = 50;
                }
                else if (winners[i].count >= 6) {
                    multiplier = 25;
                }
                else if (winners[i].count >= 5) {
                    multiplier = 15;
                }
            }
            else if (winners[i].number === 10) {
                if (winners[i].count >= 8) {
                    multiplier = 100;
                }
                else if (winners[i].count >= 7) {
                    multiplier = 70;
                }
                else if (winners[i].count >= 6) {
                    multiplier = 40;
                }
                else if (winners[i].count >= 5) {
                    multiplier = 20;
                }
            }


            number = winners[i].number;
            count = winners[i].count;
            amount = bet * multiplier;
            payouts.push({ "amount": amount, "number": number, "count": count, "paid": false });
            this.setState({
                payouts: payouts
            })
            //pass back to main screen
            this.props.onPayOuts(payouts);
        }
    }

    countSlotIcons = () => {
        let slot = this.state.slots;
        let icons = {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0,
            "6": 0,
            "7": 0,
            "8": 0,
            "9": 0,
            "10": 0
        };
        for (let i = 0; i < slot.length; i++) {
            for (let x = 0; x < slot[i].length; x++) {
                icons[slot[i][x].number]++;
            }
        }
        return icons;
    }

    componentDidMount() {
        this.setSlotMachineNumbers();
    }

    render() {
        return (
            <div className="Slot-Machine">
                <div className="Slot-Machine__machine">
                    {
                        this.state.slots.map((row) => {
                            return (
                                <div className="slot__row" key={uuidv4()}>
                                    {
                                        row.map((
                                            column) => {
                                            return <SlotsIcon key={uuidv4()} image={column.number} payouts={this.state.payouts} />
                                        }
                                        )
                                    }
                                </div>
                            );
                        })
                    }
                </div>
                <div>
                    <button className="Slot-Machine__btn" onClick={this.goUntilWin}>{(this.state.getOutOfUntilWin) ? "AUTO PLAY!" : "STOP!"}</button>
                    <button className="Slot-Machine__btn" onClick={this.goOnce}>GO ONCE!</button>
                </div>
            </div>
        );
    }
}

export default SlotMachine;
