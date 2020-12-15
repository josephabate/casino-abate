import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class Payouts extends Component {

    componentDidUpdate() {
        for (let i = 0; i < this.props.pay.length; i++) {
            if (!this.props.pay[i].paid) {
                this.props.addWinnigns(this.props.pay[i].amount);
            }
        }
    }

    render() {
        console.log(this.props.pay);
        return (
            <div>
                <ul>
                </ul>
            </div>
        );
    }
}

export default Payouts;
