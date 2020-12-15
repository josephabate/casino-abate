import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import './AddFunds.scss';

const API_PK_KEY = process.env.REACT_APP_PK_KEY;
loadStripe(`${API_PK_KEY}`);

class AddFunds extends Component {
    state = {
        product: 15.00
    }

    handleToken = (token) => {
        const amount = parseInt(this.state.product);
        axios.post(`/checkout`, { token, amount })
            .then((data) => {
                this.props.onAddMoney(amount)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    changePrice = (e) => {
        if (!e.target.value.includes("-")) {
            this.setState({
                product: e.target.value
            })
        }
    }

    render() {
        return (
            <section className="AddFunds">
                <h3 className="AddFunds__title">ADD FUNDS</h3>
                <input className="AddFunds__input" type="number" value={this.state.product} onChange={this.changePrice} />
                <StripeCheckout
                    stripeKey={`${API_PK_KEY}`}
                    token={this.handleToken}
                    amount={this.state.product * 100}
                    name="Adding funds to your account"
                />
            </section>
        );
    }
}

export default AddFunds;
