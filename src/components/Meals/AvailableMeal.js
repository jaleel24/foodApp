//import { useState } from "react";
import Card from "../UI/Card";
import MealItems from "./MealItems/MealItems";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];


const AvailableMeals = () => {
  //! to Store meals from backend we need useState
  // const[meals, setMeals] = useState([]);

  
  //   fetch("https://reacthttp-e48f0-default-rtdb.firebaseio.com/meals").then(response =>{
  //     return response.json();
  //   }).then(data =>{
  //     setMeals(data);
  //   })
  
 
  const mealList = DUMMY_MEALS.map((meals) => {
    return (
      <MealItems
        key={meals.id}
        id={meals.id}
        name={meals.name}
        description={meals.description}
        price={meals.price}
      />
    );
  });
  return (
    <section>
      <Card>
        <ul class="px-12 font-bold font-sans">{mealList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
