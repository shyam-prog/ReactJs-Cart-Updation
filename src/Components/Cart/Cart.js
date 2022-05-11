import React, { useContext } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Button from '../../UI/Button';
import './Cart.css';
import ItemNumberContext from '../../itemnumber-context/Item-number-context';

const Cart = (props) => {

    const cartCtx = useContext(ItemNumberContext);

    const numberOfItemsInCart = cartCtx.items.reduce((currNum, item) => {     //we are passing item object...as one element 
      return currNum + item.amount;
    }, 0);

    return (
        <Button type="reset" onClick={props.onClick}>
          {/* <i className="fas fa-shopping-cart"></i> */}
          <FaShoppingCart />
          <div className="cart-update__text">Your Cart</div>
          
          <div className="cart-update__number">{numberOfItemsInCart}</div>
        </Button>
    );
}

export default Cart;