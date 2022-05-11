import React, { useCallback, useState, useEffect } from "react";
import "./Meals.css";

import ListItem from "../ListItem/ListIteam";
import { SpinnerDotted } from "spinners-react";

const DUMMY_MEALS = [
  {
    name: "Kaju-Katali",
    id: "m1",
    description: "Sliver Coated Sweet Kaju!",
    price: 759.99,
  },
  {
    id: "m2",
    name: "HaldiRam's Mix",
    description: "Mix of Beans and DryFruits!",
    price: 199.98,
  },
  {
    id: "m3",
    name: "Ghaari",
    description: "Surat Special with pure Ghee!",
    price: 599.99,
  },
  {
    id: "m4",
    name: "Locho",
    description: "SuratiLala Special..",
    price: 50.00,
  },
];

const Meals = (props) => {
  const [dummy_meals, setDummy_meals] = useState(DUMMY_MEALS);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // fetch('url')
  // .then(data => {

  //   if (!data.ok) {
  //     throw Error(data.status);
  //   }

  //    return data.json();
  //   }).then(meals => {
  //   // console.log(meals);
  //   const temp_meals = [];

  // for(const MealName in meals){
  //   temp_meals.push({name: MealName, id: meals[MealName].id, description: meals[MealName].description, price: meals[MealName].price })
  // }

  // setDummy_meals(temp_meals);
  //   }).catch(e => {
  //   console.log(e);
  //   setIsLoading(false);
  // })

  const fetchMeals = useCallback(async () => {
    setIsLoading(true);
    console.log(isLoading);
    setError(null);
    try {
      const response = await fetch(
        "YourFireBaseURL"
      );

      if (response.ok) {
        // throw new Error("At moment Not Available");
        const meals = await response.json();

        const temp_meals = [];

        for (const MealName in meals) {
          temp_meals.push({
            name: MealName,
            id: meals[MealName].id,
            description: meals[MealName].description,
            price: meals[MealName].price,
          });
        }
        setDummy_meals(temp_meals);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsLoading(false);
    }
  }, []);

  // useEffect(() => {
  //   fetchMeals();
  // }, []);

  return (
    <React.Fragment>
      <div className="wrapper">
        <section className="center-info__text">
          <h2>Delicious Food, Delivered To You</h2>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </section>
        <div className="center-info__list">
          {/* {console.log(isLoading)} */}
          {isLoading ? (
            <SpinnerDotted
              color="#8a2b06"
              style={{ position: "relative", top: "50%", left: "50%" }}
            />
          ) : (
            dummy_meals.map((dummy) => {
              return (
                <ListItem
                  key={dummy.id}
                  id={dummy.id}
                  name={dummy.name}
                  price={dummy.price}
                  description={dummy.description}
                />
              );
            })
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Meals;
