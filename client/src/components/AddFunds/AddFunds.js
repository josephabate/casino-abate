import React, { Component } from 'react';

import StripeCheckout from 'react-stripe-checkout';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { updateBalanceToSession } from '../GlobalHelpers/AccountMoneyHandler';
const API_URL = process.env.REACT_APP_API_URL;
const API_PK_KEY = process.env.REACT_APP_PK_KEY;

const stripePromise = loadStripe(`${API_PK_KEY}`);

class AddFunds extends Component {
    state = {
        product: 15.00
    }

    handleToken = (token) => {
        const amount = parseInt(this.state.product);
        axios.post(`${API_URL}/checkout`, { token, amount })
            .then((data) => {
                this.props.onAddMoney(amount)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    changePrice = (e) => {
        if (!e.target.value.includes("-") && !e.target.value != ("-")) {
            this.setState({
                product: e.target.value
            })
        }
    }

    render() {
        return (
            <div>
                <StripeCheckout
                    stripeKey={`${API_PK_KEY}`}
                    token={this.handleToken}
                    amount={this.state.product * 100}
                    name="Adding funds to your account"
                />
                <input type="number" value={this.state.product} onChange={this.changePrice} />
            </div>
        );
    }
}

export default AddFunds;
