import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import FormInput from "../FormInput/FormInput";
import "./InputOverlay.css";
import ItemNumberContext from "../../itemnumber-context/Item-number-context";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { SpinnerDotted } from "spinners-react";

const Input = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [isShown, setIsShown] = useState(false);
  const cartCtx = useContext(ItemNumberContext);
  const totalAmount = cartCtx.totalAmount;
  const hasItems = cartCtx.items.length > 0;

  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  async function cartDataToServer(user) {
    setIsSubmitting(true);
    fetch(
      "url",
      {
        method: "POST",
        body: JSON.stringify({
          userDetails: user,
          orderedItems: cartCtx.items,
        })
      }
    );
    cartCtx.clearCart();
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const checkoutFormShownHandler = () => {
    setIsShown(true);
  };
  //
  const order_closeButtons = (
    <div className="buttons">
      <button
        className="custom__button_close"
        type="button"
        onClick={props.cartClose}
      >
        Close
      </button>
      {hasItems && (
        <button
          className="custom__button_order"
          type="button"
          onClick={checkoutFormShownHandler}
        >
          Order
        </button>
      )}
    </div>
  );

  const showingCheckOutCode = (
    <React.Fragment>
      {isShown && (
        <CheckoutForm
          cartClose={props.cartClose}
          // clearWholeCart={cartCtx.clearCart}
          addingDataToServer={cartDataToServer}
        />
      )}
    </React.Fragment>
  );
  const addedMeals__info = (
    <React.Fragment>
      <div className="addedMeals__info">
        {cartCtx.items.map((item) => (
          <FormInput
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAddHandler={onAddHandler.bind(null, item)}
            onRemoveHandler={onRemoveHandler.bind(null, item.id)}
          />
        ))}
      </div>
      <div className="totalprice">
        <h1>Total: -</h1>
        <h1>₹{totalAmount.toFixed(2)}</h1>
      </div>
      {showingCheckOutCode}
      {!isShown && order_closeButtons}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <div className="backdrop" onClick={props.cartClose} />
      <div className="input-overlay">
        {!isSubmitting && !submitted && addedMeals__info}
        {isSubmitting && !submitted && (
          <SpinnerDotted
            color="#8a2b06"
            style={{ position: "relative", top: "50%", left: "50%" }}
          ></SpinnerDotted>
        )}
        {submitted && !isSubmitting && (
          <React.Fragment>
          <p>Data Sent Successfully!!</p>
            <button
              className="custom__button_close"
              type="button"
              // onClick={props.clearWholeCart}
              onClick={props.cartClose}
              // onClick={cartCtx.clearCart}
            >
              Close
            </button>
            
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

const InputOverlay = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Input cartClose={props.cartClose} />,
        document.getElementById("input-overlay__root")
      )}
    </React.Fragment>
  );
};

export default InputOverlay;
