import React from 'react';
import wheel from '../../assets/gifs/roulette-wheel.gif';
import './RouletteWheel.scss';


const RouletteWheel = ({ number }) => {
    return (
        (!!!number) ?
            <img src={wheel} alt="Roulette Wheel" className="RouletteWheel__wheel" />
            : <div className="RouletteWheel">
                <div className={`RouletteWheel__wrapper RouletteWheel__wrapper--${number%2}`}>
                    <h1 className="RouletteWheel__number">{number}</h1>
                </div>
            </div>
    );
}

export default RouletteWheel;
