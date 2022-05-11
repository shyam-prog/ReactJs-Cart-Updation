import React, { useState, useRef } from "react";
import "./CheckoutForm.css";

const isValid = (value) => value.trim() !== "";

const isSixChar = (value) => value.trim().length === 6;

const CheckoutForm = (props) => {

  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true
  });

  const nameEnteredRef = useRef('');
  const streetEnteredRef = useRef('');
  const postalCodeEnteredRef = useRef('');
  const cityEnteredRef = useRef('');
  

  
  // console.log(enteredName, enteredCity, enteredStreet);
  
  let formIsValid = false;
  
  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    const enteredName = nameEnteredRef.current.value;
    const enteredStreet = streetEnteredRef.current.value;
    const enteredPostalCode = postalCodeEnteredRef.current.value;
    const enteredCity = cityEnteredRef.current.value;
    
    const nameIsValid = isValid(enteredName);
    const streetIsValid = isValid(enteredStreet);
    const postalCodeIsValid = isSixChar(enteredPostalCode);
    const cityIsValid = isValid(enteredCity);

    formIsValid = nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;
    setFormValidity({
      name: nameIsValid,
      street: streetIsValid,
      postalCode: postalCodeIsValid,
      city: cityIsValid
    })

    if(!formIsValid){
      return;
    }
    //submitting through cart...

    props.addingDataToServer({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode
    });

  };

  return (
    <React.Fragment>
      <div className="checkout__div">
        <hr />
        <form className="form__checkout" onSubmit={formSubmitHandler}>
          <label className="label__checkout" htmlFor="yourname">
            Your Name
          </label>
          <input
            ref={nameEnteredRef}
            className="input__checkout"
            type="text"
            name="yourname"
          />
        {!formValidity.name && <p style={{color: "red"}}>Name should not empty!</p> }
          {/*  */}
          <label className="label__checkout" htmlFor="street">
            Street
          </label>
          <input
            ref={streetEnteredRef}
            className="input__checkout"
            type="text"
            name="street"
          />
        {!formValidity.street && <p style={{color: "red"}}>Street should not empty!</p> }

          {/*  */}
          <label className="label__checkout" htmlFor="postalcode">
            Postal Code
          </label>
          <input
            ref={postalCodeEnteredRef}
            className="input__checkout"
            type="number"
            id="postalcode"
            name="postalcode"
          />
        {!formValidity.postalCode && <p style={{color: "red"}}>Postal Code must be equal to 6 char!</p> }
          {/* sdf */}
          <label className="label__checkout" htmlFor="city">
            City
          </label>
          <input
            ref={cityEnteredRef}
            className="input__checkout"
            type="text"
            id="city"
            name="city"
          />
        {!formValidity.city &&<p style={{color: "red"}}>City should not empty!</p> }
          <div className="for__buttons">
            <button
              type="submit"
              className="custom__button_order"
              // disabled={!formIsValid}
              // onClick={props.clearWholeCart}
            >
              Confirm
            </button>
            <button
              type="button"
              className="custom__button_close"
              onClick={props.cartClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default CheckoutForm;
