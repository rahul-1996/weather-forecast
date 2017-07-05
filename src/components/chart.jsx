import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines' ; 
function average(data) {
    let sum = data.reduce((a,b) => a+b, 0) ; 
    return Math.round(sum/data.length) ;  
}

export default (props) => {
    return(
        <div>
            <Sparklines data={props.data}  width={180} height={150} >
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />  
            </Sparklines> 
            <div>
                {average(props.data)}  {props.units}
            </div>
        </div>
    );
}