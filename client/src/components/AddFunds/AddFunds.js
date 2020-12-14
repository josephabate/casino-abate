import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;
const API_PK_KEY = process.env.REACT_APP_PK_KEY;

const stripePromise = loadStripe(`${API_PK_KEY}`);


function AddFunds(){

    const [product] = React.useState({
        price: 100
    })

    function handleToken(token){
        axios.post(`${API_URL}/checkout`, {token, product})
        .then((data)=>{
            console.log("PAYMENT COMPELTE");
        })
        .catch((err)=>{
            console.log(err);
        })
    }

        return (
            <div>
                
                <StripeCheckout 
                stripeKey={`${API_PK_KEY}`}
                token={handleToken}
                amount={product.price * 100}
                name="Adding funds to your account"
                />
            </div>
        );
}

export default AddFunds;
