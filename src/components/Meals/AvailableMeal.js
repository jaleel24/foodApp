import { useState, useEffect } from "react";
import Card from "../UI/Card";
import MealItems from "./MealItems/MealItems";

const AvailableMeals = () => {
  //! to Store meals from backend we need useState
  const[mealL, setMeals] = useState([]);
  const[isLoading, setIsLoading]=useState(true);
  //Always use useffect to handle side effects like fetching the data
  useEffect(()=>{
    // setIsLoading(true);
    const fetchMeals = async ()=>{
      const response = await fetch('https://reacthttp-e48f0-default-rtdb.firebaseio.com/meals.json');
      const data =  await response.json();

      const loadedArray =[];
      //! converting the firebase object into an array so we will run through every key and pull out the data and push it into the array
      for(const key in data){
        loadedArray.push({
          id:key,
          description:data[key].description,
          name:data[key].name,
          price: data[key].price
        })
      }
      setMeals(loadedArray);
    }
    
    fetchMeals();
    setIsLoading(false);
  },[]);

  if(isLoading){
    return <section class="flex justify-center"><p class="text-white text-center  w-1/2">Loading......</p></section>
  }
 
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
