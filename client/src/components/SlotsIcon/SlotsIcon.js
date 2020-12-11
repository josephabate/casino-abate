import React from 'react';
import icons from '../GlobalHelpers/SlotImages';

const SlotsIcon = ({image}) => {
    return (
        <div>
            <img src={icons[image]} alt="icon" />
        </div>
    );
}

export default SlotsIcon;
