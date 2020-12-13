import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class Payouts extends Component {

    componentDidUpdate(){
        this.props.pay.forEach((p)=>{
            this.props.addWinnigns(p.amount);
        });
        
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.pay.map((p)=>{
                        return(<li key={uuidv4()}>{`${p.number} came out ${p.count} times > $${p.amount}`}</li>)
                    })}
                </ul>
            </div>
        );
    }
}

export default Payouts;
