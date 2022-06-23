import { useState } from "react";
//! hooks are always generic
// 2- we can expect a function as an argument to this custom hook function
const CartInput = (validateValue)=>{

    const [enteredValue,setEnteredValue] = useState("");
    const [isTouched , setisTouched] = useState(false);

    // 1- we are not hard coding the logic of validating the value so we are keeping it generic
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

const ValueHandler =(event)=>{
    setEnteredValue(event.target.value);
}

const valueBlurHandler =(event)=>{
    setisTouched(true);
}

const reset = ()=>{
    setisTouched(false);
    setEnteredValue('');
}
return {
    value:enteredValue,
    hasError:hasError,
    isValid:valueIsValid,
    ValueHandler,
    valueBlurHandler,
    reset
};

}

export default CartInput;