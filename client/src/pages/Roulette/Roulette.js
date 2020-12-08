import React, { Component } from 'react';
import RouletteTable from '../../components/RouletteTable/RouletteTable';
import './Roulette.scss';

class Roulette extends Component {
    constructor(props) {
        super(props);
        if (!!!sessionStorage.getItem("user")) {
            this.props.history.push('/registration');
        }
    }
    render() {
        return (
            <div className="Roulette">
                <h1>Roulette</h1>
                <RouletteTable />
            </div>
        );
    }
}

export default Roulette;
