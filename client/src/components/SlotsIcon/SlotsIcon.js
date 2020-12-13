import React from 'react';
import icons from '../GlobalHelpers/SlotImages';

const SlotsIcon = ({image, payouts}) => {
    let style={backgroundColor: "white"};
    payouts.forEach(payee => {
        if(payee.number == image){
            style.backgroundColor = "red";
        }
    });
    
    return (
        <div>
            <img style={style} src={icons[image]} alt="icon" />
        </div>
    );
}

export default SlotsIcon;
