//import mealImage from '../../../assets/meals.jpg';
import { useRef, useState } from "react";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
        const amountInputRef= useRef();
       const [amountIsValid , setAmountisValid] = useState(true);

    const submitHandler = (event)=>{
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        console.log(enteredAmount);
        const enteredAmountNumber =+enteredAmount;
       
        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
           setAmountisValid(false);
            return ;
        }
        //! go to mealitem.js
        props.onAddToCart(enteredAmountNumber);
    }
     //! wer are going to use ref inside the custome component for that
    //! we need to import react from react wher this ref ill be used
    //! in our case it will be input component
    return(
        <form class="flex" onSubmit={submitHandler}>
           
            <Input 
                label={"Amount :"}
                ref ={amountInputRef}
                input={{             
                id:'amount',
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }}/>
            <button class="bg-orange-800 rounded-2xl px-4 py-1 text-white text-center">+  Add</button>
            {/* <img src={mealImage} class="h-10 flex justify-end"/> */}
            {!amountIsValid && <p>please enter a valid amount (1-5)</p>}
        </form>
    );
};

export default MealItemForm;