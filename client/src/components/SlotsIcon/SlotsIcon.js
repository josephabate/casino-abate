import React from 'react';
import icons from '../GlobalHelpers/SlotImages';

const SlotsIcon = ({image, payouts}) => {
    let style={backgroundColor: "wheat",  "borderRadius": "1rem", margin: ".2rem"};
    payouts.forEach(payee => {
        if(payee.number === image){
            style.backgroundColor = "grey";
        }
    });
    
    return (
        <div>
            <img style={style} src={icons[image]} alt="icon" />
        </div>
    );
}

export default SlotsIcon;
