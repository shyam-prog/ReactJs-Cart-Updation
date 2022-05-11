import React, { useState, useContext } from "react";
import "./MealNumber.css";
import ItemNumberContext from "../../itemnumber-context/Item-number-context";
import Button from "../../UI/Button";

const MealNumber = (props) => {
  const cartCtx = useContext(ItemNumberContext);
  const [numberOfItems, setNumberOfItems] = useState(1);

  const numberOfItemsHandler = (event) => {
      // console.log(event.target.value);
      setNumberOfItems(event.target.value);
    };

  const onClickAddButton = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: +numberOfItems,
      price: props.price
    });
    console.log('id:'+ props.id,
      'name:' + props.name,
      'amount:' + (+numberOfItems),
      'price:' + props.price);
    };


  return (
      <React.Fragment>
        <div className="add__meal">
          <label className="label__mealslist" htmlFor="amount">Amount</label>
          <input
            id="amount"
            className="input__mealslist"
            name="amount"
            type="number"
            value={numberOfItems}
            onChange={numberOfItemsHandler}
            step="1"
            min="1"
            max="20"
          />
          <Button type="button" onClick={onClickAddButton}>
            + Add
          </Button>
        </div>
        <hr />
      </React.Fragment>

  );
};

export default MealNumber;
