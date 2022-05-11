import React from "react";
import "./ListItem.css";
import MealNumber from "../AddNumberOfMeal/MealNumber";

const ListItem = (props) => {
  return (
    <React.Fragment>
      <div className="meal__info">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <h4>₹{props.price}</h4>
      </div>
      <MealNumber
        key={props.id}
        id={props.id}
        name={props.name}
        price={props.price}
      />
    </React.Fragment>
  );
};

export default ListItem;
