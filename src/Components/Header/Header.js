import React from "react";

import "./Header.css";
import ImagePath from "./food_background.jpg";


const Header = (props) => {

  
  // console.log(ctx);

  return (
    <React.Fragment>
      <div className="header">  {/* flex-box */}
        <div className="text-head">ReactMeals</div>
        {props.children}
        {/* <ListItem /> */}
      </div>
    <div className="main-img">
        <img className="back-ground_img" src={ImagePath}  alt="foodimg"/>
    </div>
    </React.Fragment>
  );
};

export default Header;
