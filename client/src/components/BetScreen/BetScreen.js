import React from 'react';
import './BetScreen.scss';

function checkForWinner(betNumber, landedNumber) {

    if (!isNaN(betNumber)) {
        return betNumber == landedNumber;
    } else if (betNumber.includes("TOP 2 TO 1")) {
        for (let x = 3; x <= 36; x = x + 3) {
            if (x === landedNumber) {
                return true
            }
        }
        return false;
    } else if (betNumber.includes("MIDDLE ROW 2 TO 1")) {
        for (let x = 2; x <= 35; x = x + 3) {
            if (x === landedNumber) {
                console.log(x + " " + landedNumber)
                return true
            }
        }
        return false;
    } else if (betNumber.includes("BOTTOM ROW 2 TO 1")) {
        for (let x = 1; x <= 34; x = x + 3) {
            if (x === landedNumber) {
                return true
            }
        }
        return false;
    } else if (betNumber.includes("1ST12")) {
        return 0 < landedNumber && landedNumber < 13;
    } else if (betNumber.includes("2ND12")) {
        return 12 < landedNumber && landedNumber < 25;
    }
    else if (betNumber.includes("3RD12")) {
        return 24 < landedNumber && landedNumber < 37;
    } else if (betNumber.includes("1TO18")) {
        return 0 < landedNumber && landedNumber < 19;
    }
    else if (betNumber.includes("EVEN") || betNumber.includes("RED")) {
        return (landedNumber !== 0) && (landedNumber % 2 === 0);
    } else if (betNumber.includes("BLACK") || betNumber.includes("ODD")) {
        return (landedNumber % 2 !== 0);
    } else {
        return 18 < landedNumber && landedNumber < 37;
    }
}

const BetScreen = ({ allBets, wheelNumber, addWinnings }) => {
    return (
        <div className="BetScreen">
            <h1 className="BetScreen__title" >BETS</h1>
            <div className="BetScreen__listWrapper">
                {
                    allBets.map((data) => {
                        console.log(data);
                        if (wheelNumber) {
                            console.log("has nuM")
                            //addWinnings for add funds
                            if (checkForWinner(data.name, wheelNumber)) {
                                //add winnigns to players account
                                let winnings = data.money * data.ratio;
                                if (!data.collected) {
                                    addWinnings(winnings, data.id);
                                }
                                //render the winning lines
                                return (
                                    //if you win turn green else red
                                    <div key={data.id} style={{ color: "green" }}>
                                        <h4>${data.money} on {data.name}</h4>
                                    </div>
                                )
                            } else {
                                //render the losing lines
                                return (
                                    <div key={data.id} style={{ color: "red" }}>
                                        <h4>${data.money} on {data.name}</h4>
                                    </div>
                                )
                            }
                        } else {
                            return (
                                <div key={data.id}>
                                    <h4>${data.money} on {data.name}</h4>
                                </div>)
                        }
                    })
                }
            </div>
        </div>
    );
}

export default BetScreen;
