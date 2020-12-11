import React, { Component } from 'react';
import SlotMachine from '../../components/SlotMachine/SlotMachine';


class Slots extends Component {
    constructor(props) {
        super(props);
        if (!!!sessionStorage.getItem("user")) {
            this.props.history.push('/registration');
        }
    }
    render() {
        return (
            <div>
                <h1>Slots</h1>
            <SlotMachine />
            </div>
        );
    }
}

export default Slots;
