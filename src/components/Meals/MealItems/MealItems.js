import MealItemForm from "./MealItemForm";
const MealItems = (props) =>{
    const price = `$${props.price.toFixed(2)}`;
    return(
        <li>
            <div>
                <h2 class="text-lg ">{props.name}</h2>
                <div class="text-sm font-thin font-serif">{props.description}</div>
                <div class="text-orange-800">{price}</div>
                
               
            </div>

        {/* we are going to use the seprate MealItemForm which is another componinet for reusability */}
            
        <MealItemForm />
        <hr />
            
       </li>
    );

};
export default MealItems;