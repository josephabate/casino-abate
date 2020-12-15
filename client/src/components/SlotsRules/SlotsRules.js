import React from 'react';
import './SlotsRules.scss';
import SlotRule from '../SlotRule.js/SlotRule';

const SlotsRules = () => {
    return (
        <section className="SlotsRules">
            <h2>How To Win!</h2>
            <SlotRule howMany={7} image={0} multiplier={3} />
            <SlotRule howMany={8} image={0} multiplier={4} />
            <SlotRule howMany={9} image={0} multiplier={5} />
            <SlotRule howMany={10} image={0} multiplier={5} />
            
            <SlotRule howMany={6} image={6} multiplier={5} />
            <SlotRule howMany={7} image={6} multiplier={8} />
            <SlotRule howMany={8} image={6} multiplier={10} />
            <SlotRule howMany={10} image={6} multiplier={15} />

            <SlotRule howMany={5} image={7} multiplier={8} />
            <SlotRule howMany={6} image={7} multiplier={10} />
            <SlotRule howMany={7} image={7} multiplier={15} />
            <SlotRule howMany={8} image={7} multiplier={20} />

            <SlotRule howMany={5} image={8} multiplier={10} />
            <SlotRule howMany={6} image={8} multiplier={15} />
            <SlotRule howMany={7} image={8} multiplier={25} />
            <SlotRule howMany={8} image={8} multiplier={10} />

            <SlotRule howMany={5} image={9} multiplier={15} />
            <SlotRule howMany={6} image={9} multiplier={25} />
            <SlotRule howMany={7} image={9} multiplier={50} />
            <SlotRule howMany={8} image={9} multiplier={80} />

            <SlotRule howMany={5} image={10} multiplier={20} />
            <SlotRule howMany={6} image={10} multiplier={40} />
            <SlotRule howMany={7} image={10} multiplier={75} />
            <SlotRule howMany={8} image={10} multiplier={100} />

            {/*<div className="SlotsRules__rule">
                <img className="SlotsRules__icon" src={icons[0]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[1]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[2]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[3]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[4]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[5]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[0]} alt="fruit" />
                <h3 className="SlotsRules__rule-title">x3</h3>
            </div>
            <div className="SlotsRules__rule">
                <img className="SlotsRules__icon" src={icons[0]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[1]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[2]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[3]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[4]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[5]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[0]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[1]} alt="fruit" />
                <h3 className="SlotsRules__rule-title">x4</h3>
            </div>
            <div className="SlotsRules__rule">
                <img className="SlotsRules__icon" src={icons[0]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[1]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[2]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[3]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[4]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[5]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[0]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[1]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[2]} alt="fruit" />
                <h3 className="SlotsRules__rule-title">x5</h3>
            </div>
            <div className="SlotsRules__rule">
                <img className="SlotsRules__icon" src={icons[0]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[1]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[2]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[3]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[4]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[5]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[0]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[1]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[2]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[3]} alt="fruit" />
                <h3 className="SlotsRules__rule-title">x6</h3>
            </div>
            <div className="SlotsRules__rule">
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <h3 className="SlotsRules__rule-title">x5</h3>
            </div>
            <div className="SlotsRules__rule">
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <h3 className="SlotsRules__rule-title">x7</h3>
            </div>
            <div className="SlotsRules__rule">
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <h3 className="SlotsRules__rule-title">x8</h3>
            </div>
            <div className="SlotsRules__rule">
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <img className="SlotsRules__icon" src={icons[6]} alt="fruit" />
                <h3 className="SlotsRules__rule-title">x10</h3>
            </div>*/}
        </section>
    );
}

export default SlotsRules;
