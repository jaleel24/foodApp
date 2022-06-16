import { useState, useEffect } from "react";
import Card from "../UI/Card";
import MealItems from "./MealItems/MealItems";
// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];


const AvailableMeals = () => {
  //! to Store meals from backend we need useState
  const[mealL, setMeals] = useState([]);

  //Always use useffect to handle side effects like fetching the data
  useEffect(()=>{
    
    const fetchMeals = async ()=>{
      const response = await fetch('https://reacthttp-e48f0-default-rtdb.firebaseio.com/meals.json');
      const data =  await response.json();

      const loadedArray =[];

      for(const key in data){
        loadedArray.push({
          id:key,
          description:data[key].description,
          name:data[key].name,
          price: data[key].price
        })
      }
      console.log(loadedArray)
      setMeals(loadedArray);
    }
    
    fetchMeals();
  },[]);

 
  const mealList = mealL.map((meals) => {
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
