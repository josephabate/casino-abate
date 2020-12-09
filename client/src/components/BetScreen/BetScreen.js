import React from 'react';
import './BetScreen.scss';
import { v4 as uuidv4 } from 'uuid';


const BetScreen = ({ allBets }) => {
    return (
        <div className="BetScreen">
            <h1 className="BetScreen__title" >BETS</h1>
            <div className="BetScreen__listWrapper">
                {allBets.map((data) => {
                    console.log(data);
                    return (<div key={uuidv4()}>
                        <h4>${data.money} on {data.name} payout {data.ratio} to 1</h4>
                    </div>)
                })}
            </div>
        </div>
    );
}

export default BetScreen;
