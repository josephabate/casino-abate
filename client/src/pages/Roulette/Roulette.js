import React, { Component } from 'react';

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
            </div>
        );
    }
}

export default Roulette;
