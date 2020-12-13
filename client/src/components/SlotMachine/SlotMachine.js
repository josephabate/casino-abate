import './SlotMachine.scss';
import { v4 as uuidv4 } from 'uuid';
import React, { Component } from 'react';
import SlotsIcon from '../SlotsIcon/SlotsIcon';

class SlotMachine extends Component {
    state = {
        bet: 0,
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
        winner: false
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
        else if (number <= 805) { number = 6; }
        else if (number <= 865) { number = 7; }
        else if (number <= 915) { number = 8; }
        else if (number <= 955) { number = 9; }
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
       /* if (/*this.props.bet === 0) {
            return;
        }*/
        this.setSlotMachineNumbers();

        if (this.state.interval < 10) {

            setTimeout(() => {
                this.goOnce()
            }, 100);
        } else {
            this.checkForWinner();
            this.setState({
                interval: 0
            });
        }
    }

    goUntilWin = () => {
        this.setState({winner: false}, this.setNewSlot);
    }

    //makes new slot render
    setNewSlot = () => {
        if (/*this.props.bet === 0 ||*/ this.state.winner) {
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
                    this.setNewSlot()
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
            if (icons[i] >= 6) {
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
        const bet = this.state.bet;
        const payouts = [];

        let multiplier;
        let amount;
        let number;
        let count;

        for (let i = 0; i < winners.length; i++) {
            if (winners[i].number <= 6) {
                if (winners[i].count >= 24) {
                    multiplier = 50;
                }
                if (winners[i].count >= 18) {
                    multiplier = 25;
                }
                if (winners[i].count >= 12) {
                    multiplier = 15;
                }
                if (winners[i].count >= 6) {
                    multiplier = 5;
                }
            }
            if (winners[i].number === 7) {
                if (winners[i].count >= 24) {
                    multiplier = 150;
                }
                if (winners[i].count >= 18) {
                    multiplier = 135;
                }
                if (winners[i].count >= 12) {
                    multiplier = 120;
                }
                if (winners[i].count >= 6) {
                    multiplier = 100;
                }
            }
            if (winners[i].number === 8) {
                if (winners[i].count >= 24) {
                    multiplier = 200;
                }
                if (winners[i].count >= 18) {
                    multiplier = 175;
                }
                if (winners[i].count >= 12) {
                    multiplier = 150;
                }
                if (winners[i].count >= 6) {
                    multiplier = 125;
                }
            }
            if (winners[i].number === 9) {
                if (winners[i].count >= 24) {
                    multiplier = 400;
                }
                if (winners[i].count >= 18) {
                    multiplier = 350;
                }
                if (winners[i].count >= 12) {
                    multiplier = 200;
                }
                if (winners[i].count >= 6) {
                    multiplier = 150;
                }
            }
            if (winners[i].number === 10) {
                if (winners[i].count >= 24) {
                    multiplier = 800;
                }
                if (winners[i].count >= 18) {
                    multiplier = 500;
                }
                if (winners[i].count >= 12) {
                    multiplier = 300;
                }
                if (winners[i].count >= 6) {
                    multiplier = 250;
                }
            }
            if (winners[i].number === 11) {
                if (winners[i].count >= 24) {
                    multiplier = 1000;
                }
                if (winners[i].count >= 18) {
                    multiplier = 800;
                }
                if (winners[i].count >= 12) {
                    multiplier = 700;
                }
                if (winners[i].count >= 6) {
                    multiplier = 500;
                }
            }


            number = winners[i].number;
            count = winners[i].count;
            amount = bet * multiplier;
            payouts.push({ "amount": amount, "number": number, "count": count });
            
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
        /* this.setState({
             iconCounter: icons
         });*/
        return icons;
    }

    componentDidMount() {
        this.setSlotMachineNumbers();
    }

    render() {
        return (
            <div>
                {
                    this.state.slots.map((row) => {
                        return (
                            <div className="slot__row" key={uuidv4()}>
                                {
                                    row.map((
                                        column) => {
                                        return <SlotsIcon key={uuidv4()} image={column.number} />
                                    }
                                    )
                                }
                            </div>
                        );
                    })
                }
                <button onClick={this.goUntilWin}>GO UNTIL WIN!</button>
                <button onClick={this.goOnce}>GO ONCE!</button>
            </div>
        );
    }
}

export default SlotMachine;
