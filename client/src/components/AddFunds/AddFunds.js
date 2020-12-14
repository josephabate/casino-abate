import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;
const API_PK_KEY = process.env.REACT_APP_PK_KEY;

const stripePromise = loadStripe(`${API_PK_KEY}`);


function AddFunds(){
    function handleToken(token){
        axios.post(`${API_URL}/checkout`, {token})
        .then((data)=>{
            console.log("PAYMENT COMPELTE");
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    console.log(API_PK_KEY)


        return (
            <div>
                
                <StripeCheckout 
                stripeKey={`${API_PK_KEY}`}
                token={handleToken}
                amount={10000}
                name="Adding funds to your account"
                />
            </div>
        );
}

export default AddFunds;
