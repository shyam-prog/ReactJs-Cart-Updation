import React, { useState } from 'react';
import CartProvider from './itemnumber-context/CartProvider';
import './App.css';
import InputOverlay from "./Components/InputOverlay/InputOverlay"
import Cart from './Components/Cart/Cart';
import Header from "./Components/Header/Header";
import Meals from './Components/Meals/Meals';
const App = () => {
  
  const [cartClicked,setCartClicked] = useState(false);
  
  const cartIsShown = () => {
    console.log("Cart is clicked");
    setCartClicked(true);
  };

  const cartIsClose = () => {
    console.log("Cart is closed");
    setCartClicked(false);
  }


  // const ctx = useContext(ItemNumberContext);
  return (
    <CartProvider>
    {/* <ItemNumberContext.Provider > */}
      {cartClicked && <InputOverlay cartClose={cartIsClose}/>}
      <Header>
        <Cart onClick={cartIsShown}/>
      </Header>
      <Meals />
      
    {/* </ItemNumberContext.Provider> */}
    </CartProvider>
  );
}

export default App;
