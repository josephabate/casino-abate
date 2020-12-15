import React from 'react';
import './SlotRule.scss';
import icons from '../GlobalHelpers/SlotImages';

const SlotRule = (props) => {
    return (
        <div className="SlotRule">
            <h3 className="SlotRule__qty">{props.howMany}</h3> <img className="SlotRule__icon" src={icons[props.image]} alt="fruit" /><h3 className="SlotRule__qty">'s</h3>
            <h3 className="SlotRule__mult">x {props.multiplier}</h3>
        </div>
    );
}

export default SlotRule;
