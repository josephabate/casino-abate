import React from 'react';
import './BetScreen.scss';
import { v4 as uuidv4 } from 'uuid';

function checkForWinner(betNumber, landedNumber){

    if (!isNaN(betNumber)) {
        return betNumber == landedNumber;
    }else if(betNumber.includes("TOP 2 TO 1")){
        for(let x = 3; x <= 36; x = x + 3){
            if(x === landedNumber){
                return true
            }
        }
        return false;
    }else if(betNumber.includes("MIDDLE ROW 2 TO 1")){
        for(let x = 2; x <= 35; x= x + 3){
            if(x === landedNumber){
                console.log(x + " " + landedNumber)
                return true
            }
        }
        return false;
    }else if(betNumber.includes("BOTTOM ROW 2 TO 1")){
        for(let x = 1; x <= 34; x= x + 3){
            if(x === landedNumber){
                return true
            }
        }
        return false;
    }else if(betNumber.includes("1ST12")){
        return 0 < landedNumber && landedNumber < 13; 
    }else if(betNumber.includes("2ND12")){
        return 12 < landedNumber && landedNumber < 25; 
    }
    else if(betNumber.includes("3RD12")){
        return 24 < landedNumber && landedNumber < 37; 
    }else if(betNumber.includes("1TO18")){
        return 0 < landedNumber && landedNumber < 19; 
    }
    else if(betNumber.includes("EVEN") || betNumber.includes("RED")){
        return (landedNumber !== 0) && (landedNumber % 2 === 0); 
    }else if(betNumber.includes("BLACK") || betNumber.includes("ODD")){
        return (landedNumber % 2 !== 0); 
    }else{
        return 18 < landedNumber && landedNumber < 37;
    }
}

const BetScreen = ({ allBets, wheelNumber }) => {
    return (
        <div className="BetScreen">
            <h1 className="BetScreen__title" >BETS</h1>
            <div className="BetScreen__listWrapper">
                {allBets.map((data) => {
                    console.log(data);
                    if (wheelNumber) {
                        return (
                        <div key={uuidv4()}  style={{ color: checkForWinner(data.name, wheelNumber)? "green" : "red" }}>
                            <h4>${data.money} on {data.name}</h4>
                        </div>)
                        //if you win
                            //set win amount
                            //set the line to green
                        //if you loose
                            //make line red
  //                      let winningAmount =
                        
                    } else {
                        return (<div key={uuidv4()}>
                            <h4>${data.money} on {data.name}</h4>
                        </div>)
                    }
                })}
            </div>
        </div>
    );
}

export default BetScreen;
