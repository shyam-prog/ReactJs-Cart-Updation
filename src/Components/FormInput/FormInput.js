import React from 'react';
import './FormInput.css';

const FormInput = (props) => {
    return (
        <React.Fragment>
        
                <div className="left__info">
                    <h3>{props.name}</h3>
                    <h4>₹{props.price}</h4>
                    <span>x{props.amount}</span>
                </div>
               
            <div className="right__info">
                <button className="buttonforchange" onClick={props.onRemoveHandler}>-</button>
                <span> {props.amount} </span>
                <button className="buttonforchange" onClick={props.onAddHandler}>+</button>
                
                </div>
                <hr /> 
                </React.Fragment>
    );
        
        
}

export default FormInput;