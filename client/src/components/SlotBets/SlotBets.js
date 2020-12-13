import './SlotBets.scss';
import React, { Component } from 'react';
import chip1 from '../../assets/images/game-elements/chip1.png';
import chip5 from '../../assets/images/game-elements/chip5.png';
import chip10 from '../../assets/images/game-elements/chip10.png';
import chip25 from '../../assets/images/game-elements/chip25.png';

class SlotBets extends Component {
    render() {
        return (
            <form>
                <label>
                    <input type="radio" name="bet" value="1" onClick={()=>{this.props.onBet(1)}} />
                    <img src={chip1} alt="chip bet" />
                </label>

                <label>
                    <input type="radio" name="bet" value="5" onClick={()=>{this.props.onBet(5)}} />
                    <img src={chip5} alt="chip bet" />
                </label>

                <label>
                    <input type="radio" name="bet" value="10" onClick={()=>{this.props.onBet(10)}} />
                    <img src={chip10} alt="chip bet" />
                </label>

                <label>
                    <input type="radio" name="bet" value="25" onClick={()=>{this.props.onBet(25)}} />
                    <img src={chip25} alt="chip bet" />
                </label>
            </form>
        );
    }
}

export default SlotBets;
