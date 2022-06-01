import CartIcon from "../Cart/CartIcon";
const HeadCartButton = ()=>{
    return(
        <button class="bg-orange-900 px-10 mx-14 my-10 rounded-3xl flex items-center  text-sm font-bold">
            <span class="h-8 w-4 py-2"><CartIcon/></span>
            <span class="px-2">Your Cart</span>
            <span class="bg-orange-700 rounded-3xl px-2 text-center">3</span>
        </button>
        
    );
}
export default HeadCartButton;