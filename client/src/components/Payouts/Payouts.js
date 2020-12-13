import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Payouts = (props) => {
    return (
        <div>
            <ul>
                {props.pay.map((p)=>{
                    return(<li key={uuidv4()}>{`${p.number} came out ${p.count} times > $${p.amount}`}</li>)
                })}
            </ul>
        </div>
    );
}

export default Payouts;
