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
        winners:[],
        winner: false
    }

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

    setNewSlot = () => {
        this.setSlotMachineNumbers();

        if(this.state.winner){
            return;
        }

        if (this.state.interval < 10) {
            setTimeout(() => {
                this.setNewSlot()
            }, 100);
        } else {
            this.checkForWinner();
            this.setState({
                interval: 0
            })

            setTimeout(() => {
                this.setNewSlot()
            }, 1000);
        }
    }

    /**             6           12           18           24
     * 1 (120 <)    5           15          25          50
     * 2 (240 <)    5           15          25          50
     * 3 (360 <)    5           15          25          50
     * 4 (480 <)    5           15          25          50
     * 5 (600 <)    5           15          25          50
     * 6 (720 <)    5           15          25          50
     * 7 (805 <)    100.0       120.0       135.0       150.0
     * 8 (865 <)    125.0       150.0       175.0       200.0
     * 9 (915 <)    150.0       200.0       350.0       400.0
     * 10 (955 <)   250.0       300.0       500.0       800.0
     * 11 ( <)   500.0       700.0       800.0       1000.0
     * 
     * 0 - 1000
     * 
     */
    checkForWinner = () => {
        this.findWinners(this.countSlotIcons());    
    }

    findWinners = (icons) => {
        if(icons[0]){}
        if(icons[1]){}
        if(icons[2]){}
        if(icons[3]){}
        if(icons[4]){}
        if(icons[5]){}
        if(icons[6]){}
        if(icons[7]){}
        if(icons[8]){}
        if(icons[9]){}
        if(icons[10]){}
    }

    setAWinner = (icon, count, condition, winnings) => {
        if(count >= condition){
            return{ icon: icon, count: count: condition: condition, winnings: winnings }
        }
    }

    countSlotIcons = () => {
        let slot = this.state.slots;
        let icons = this.state.iconCounter;
        for(let i = 0; i < slot.length; i ++){
            for(let x = 0; x < slot[i].length; x++){
                icons[slot[i][x].number] ++;
            }
        }
        this.setState({
            iconCounter: icons
        });
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
                                        return <SlotsIcon image={column.number} />
                                    }
                                    )
                                }
                            </div>
                        );
                    })
                }

                <button onClick={this.setNewSlot}>GO!</button>
                <button onClick={()=>{this.setState({winner: true})}}>GstO!</button>

            </div>
        );
    }
}

export default SlotMachine;
