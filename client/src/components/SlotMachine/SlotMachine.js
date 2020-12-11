import './SlotMachine.scss';
import { v4 as uuidv4 } from 'uuid';
import React, { Component } from 'react';

class SlotMachine extends Component {
    state = {
        slots: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        interval: 0,
        winners: []
    }

    randomNumber = (min, max) => {
        let number = Math.floor(Math.random() * (max - min)) + min;
        let isWinner = false
        return {isWinner: isWinner, number: number}
    }

    setSlotMachineNumbers = () => {
        let newSlot = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]

        for (let i = 0; i < newSlot.length; i++) {
            for (let x = 0; x < newSlot[i].length; x++) {
                newSlot[i][x] = this.randomNumber(0, 10)
            }
        }

        this.setState({
            slots: newSlot,
            interval: this.state.interval + 1
        })
    }

    setNewSlot = () => {
        this.setSlotMachineNumbers();

        if (this.state.interval < 10 ) {
            setTimeout(() => {
                this.setNewSlot()
            }, 100);
        }else{
            this.setState({
                interval: 0
            })

            setTimeout(() => {
                this.setNewSlot()
            }, 1000);
        }
    }

    /**     3           4           5           6
     * 1 (0-120)    5           15          25          50
     * 2 (0-240)    5           15          25          50
     * 3 (0-360)    5           15          25          50
     * 4 (0-480)    5           15          25          50
     * 5 (0-600)    5           15          25          50
     * 6 (0-720)    5           15          25          50
     * 7 (0-120)    100.0       120.0       135.0       150.0
     * 8 (0-120)    125.0       150.0       175.0       200.0
     * 9 (0-120)    150.0       200.0       350.0       400.0
     * 10 (0-120)   250.0       300.0       500.0       800.0
     * 11 (0-120)   500.0       700.0       800.0       1000.0
     * 
     * 0 - 1000
     * 
     */
    checkForWinner = () => {
        let slot = this.state.slots;

        let same = true;
        for(let i = 0; i < slot.length; i++){
            for(let x = 0; x < 2; x++){

            }
        }
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
                            <div key={uuidv4()}>
                                {
                                    row.map((
                                        column) => {
                                        return <span key={uuidv4()} className={`${column.isWinner}`}>{column.number + " "}</span>
                                    }
                                    )
                                }
                            </div>
                        );

                    })
                }

                <button onClick={this.setNewSlot}>GO!</button>
            </div>
        );
    }
}

export default SlotMachine;
