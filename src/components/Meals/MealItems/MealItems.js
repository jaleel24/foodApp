import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItems = (props) =>{
     const cartCtx=  useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount)=>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        });
    }
    return(
        <li class="py-4 flex justify-between">
            <div>
                <h2 class="text-lg ">{props.name}</h2>
                <div class="text-sm font-thin font-serif">{props.description}</div>
                <div class="text-orange-800">{price}</div>            
            </div>

        {/* we are going to use the seprate MealItemForm which is another componinet for reusability */}
        <div>
             <MealItemForm onAddToCart={addToCartHandler}/> 
        </div>
      
       
       
       </li>
       
    );

};
export default MealItems;