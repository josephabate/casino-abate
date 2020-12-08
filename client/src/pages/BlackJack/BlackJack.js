import React, { Component } from 'react';

class BlackJack extends Component {
    constructor(props) {
        super(props);
        if (!!!sessionStorage.getItem("user")) {
            this.props.history.push('/registration');
        }
    }
    render() {
        return (
            <div>
                <h1>Black Jack</h1>
            </div>
        );
    }
}

export default BlackJack;
