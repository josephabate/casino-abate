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
        interval: 0
    }

    randomNumber = (min, max) => {
        let number = Math.floor(Math.random() * (max - min)) + min;
        let isWinner = false 
        return {winner: isWinner, number: number}
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

        if (this.state.interval < 25 ) {
            setTimeout(() => {
                this.setNewSlot()
            }, 100);
        }else{
            this.setState({
                interval: 0
            })
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
                                        return column.number
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
