//import mealImage from '../../../assets/meals.jpg';
import Input from "../../UI/Input";
const MealItemForm = (props) => {
    return(
        <form class="flex">
            <Input label={"Amount :"} input={{
                id:'amount',
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }}/>
            <button class="bg-orange-800 rounded-2xl px-4 py-1 text-white text-center">+  Add</button>
            {/* <img src={mealImage} class="h-10 flex justify-end"/> */}
        </form>
    );
};

export default MealItemForm;