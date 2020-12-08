import React, { Component } from 'react';

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
            </div>
        );
    }
}

export default Slots;
