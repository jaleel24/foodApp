import CartInput from "../../hooks/cart-input";
const CheckoutForm = (props) => {
//! name custom hook
    const {
        value:name,
        isValid:nameIsValid,
        hasError:nameHasError,
        ValueHandler:nameHandler,
        valueBlurHandler: nameBlurHandler,
        reset:nameResetHandler

    }= CartInput((value)=>
        value.trim() !== "");   

//! Steet custom hook
const {
    value:street,
    isValid:streetIsValid,
    hasError:streetHasError,
    ValueHandler:streetHandler,
    valueBlurHandler: streetBlurHandler,
    reset:streetResetHandler

}= CartInput((value)=>value.trim() !== "");   

//! Postal code custom hook
const {
    value:postalCode,
    isValid:postalCodeIsValid,
    hasError:postalCodeHasError,
    ValueHandler:postalCodeHandler,
    valueBlurHandler: postalCodeBlurHandler,
    reset:postCodeResetHandler

}= CartInput((value)=>value.trim() !== "" && value.includes('-'));   

//! City custom hook
const {
    value:city,
    isValid:cityIsValid,
    hasError:cityHasError,
    ValueHandler:cityHandler,
    valueBlurHandler: cityBlurHandler,
    reset:cityResetHandler

}= CartInput((value)=>value.trim() !== "");   
  
   
const confirmOrderHandler = (event)=>{
        event.preventDefault();
        if(!formIsValid){
            return;
        }
        console.log('Submitted');
         console.log(name,street, city, postalCode)
        nameResetHandler();
        streetResetHandler();
        cityResetHandler();
        postCodeResetHandler();

    }
    let formIsValid = false;
    if(nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid){
        formIsValid = true;
    }


  return (
   <div>
     <form onSubmit={confirmOrderHandler} >
      <div >
       <div> <label htmlFor="name" class="font-bold">Your name</label></div>
        <div><input type="text" id="name" class="border-2 rounded-md w-1/3 hover:border-orange-700" value={name} onChange={nameHandler} onBlur={nameBlurHandler}/></div>
        {nameHasError && <p class="text-red-700">Please Enter a valid Name</p>}
      </div>
      <div>
        <div><label htmlFor="street" class="font-bold">Street</label></div>
        <div>  
        <input type="text" id="street" class="border-2 rounded-md w-1/3 hover:border-orange-700"  value={street} onChange={streetHandler} onBlur={streetBlurHandler}/></div>
        {streetHasError && <p class="text-red-700">Street field cannot be empty</p> }
      </div>
      <div>
       <div><label htmlFor="postalCode" class="font-bold">postal Code</label></div>
      <div><input type="text" id="postalCode"  class="border-2 rounded-md w-1/3 hover:border-orange-700"  value={postalCode} onChange={postalCodeHandler} onBlur={postalCodeBlurHandler}/></div>
      {postalCodeHasError && <p class="text-red-700">Please Enter a valid Postal Code (L6A-3Z6)</p> }
      </div>
      <div>
        <div><label htmlFor="City" class="font-bold">City</label></div>
       <div> <input type="text" id="City"  class="border-2 rounded-md w-1/3 hover:border-orange-700" value={city} onChange={cityHandler} onBlur={cityBlurHandler}/></div>
       {cityHasError && <p class="text-red-700">City name cannot be Empty</p> }
      </div>
     <div class="flex justify-end">
        <button type="submit" class=" hover:bg-orange-700 border-2 hover:text-white border-orange-700 rounded-2xl px-5 py-1 mx-8">Confirm</button>
        <button type="button" class=" hover:bg-orange-700 border-2 hover:text-white border-orange-700 rounded-2xl px-5 " onClick={props.onCancel}>Cancel</button>
     </div>
    </form>
   </div>
  );
};

export default CheckoutForm;
