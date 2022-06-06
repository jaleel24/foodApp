import React, { useReducer } from "react";
import CartContext from "./cart-context";
   
const defaultCartState = {
    items:[],
    totalAmount:0
}; 

//! state is the last state snapshot
//! action is dealt by u in your code to dispatch the action
//! we have defined the reducer function outside the main function since it does not need anything from its surrounding
//! plus we dont want to be recreated everytime the component reders
const cartReducer = (state, action)=>{

    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotaAmount = state.totalAmount + action.item.price * action.item.amount;

        return{
            items: updatedItems,
            totalAmount: updatedTotaAmount
        };
    }
    return defaultCartState;
};


const CartProvider = (props)=>{

    //! state is the last state snapshot
    //! action is dealt by u in your code to dispatch the action
    const [cartState , cartDispatchAction ] = useReducer( cartReducer , defaultCartState);

    const addItemToCartHandler =(item)=>{
        cartDispatchAction({ 
            type:'ADD', 
            item:item
        })
    }
    const removeItemFromCartHandler = (id)=>{
        cartDispatchAction({type:'REMOVE', id:id});
    }
    
    //! just a constant which is an object
    const cartContext ={
        items:cartState.items, //! curState have access to items currently present
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler, //! just a pointer towards the function above
        removeItem:removeItemFromCartHandler //! just a pointer towards the function above
    };
    //context has just value prop which points to the context 
    return <CartContext.Provider value ={cartContext}>
        
        {props.children}
    </CartContext.Provider>

};
export default CartProvider;