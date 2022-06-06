import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
// ? important
// !  general comments
const HeadCartButton = (props)=>{

    const cartCtx = useContext(CartContext);

    //! The reduce() method reduces an array of values down to just one value.
    //! To get the output value, it runs a reducer function on each element of the array.
    //!Syntax arr.reduce(callback[, initialValue])
    const numberOfItems = cartCtx.items.reduce((curNumber , items)=>{
        return curNumber + items.amount;
    },0)

    return(
        <button class="bg-orange-900 px-10 mx-14 my-10 rounded-3xl flex items-center  text-sm font-bold" onClick={props.onClick}>
            <span class="h-8 w-4 py-2"><CartIcon/></span>
            <span class="px-2">Your Cart</span>
            <span class="bg-orange-700 rounded-3xl px-2 text-center">{numberOfItems}</span>
        </button>
        
    );
}
export default HeadCartButton;