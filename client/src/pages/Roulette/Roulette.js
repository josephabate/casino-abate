import React, { Component } from 'react';
import RouletteTable from '../../components/RouletteTable/RouletteTable';

class Roulette extends Component {
    constructor(props) {
        super(props);
        if (!!!sessionStorage.getItem("user")) {
            this.props.history.push('/registration');
        }
    }
    render() {
        return (
            <div>
                <h1>Roulette</h1>
                <RouletteTable />
            </div>
        );
    }
}

export default Roulette;
