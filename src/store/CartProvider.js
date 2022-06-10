import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

//! state is the last state snapshot
//! action is dealt by u in your code to dispatch the action
//! we have defined the reducer function outside the main function since it does not need anything from its surrounding
//! plus we dont want to be recreated everytime the component reders
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotaAmount =
      state.totalAmount + action.item.price * action.item.amount;

    //! over here we are checking the if the item is already in there and if it find its index
    const existingCartItemIndex = state.items.findIndex(
      (items) => items.id === action.item.id
    );
    //! since we have the index now we are getting the item and storing it  in the existingCartItem
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    //! if the item exists means its true then creating a new object which is updatedITem
    //!  copy the item itself and update the amount because it was already in there so add the amount of existing in the items

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      //! another array which will store all the previous items and then
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    //! if the item is not the part of existing array then
    else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotaAmount,
    };
  }
// NOw REMOVE CASE
  if(action.type ==='REMOVE'){

     // over here we are checking the if the item is already in there and if it find its index
     
     const existingCartItemIndex = state.items.findIndex(
        (items) => items.id === action.id
      );
     
      // since we have the index now we are getting the item and storing it  in the existingCartItem
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    
    let updatedItems;
    if(existingItem.amount === 1){
        // keep the items where the item.id is not equal action.id 
       // updatedItems = state.items.filter( item => item.id !== action.id);
        updatedItems = state.items.filter(item => item.id !== action.id);
    }
    else{
    //    const  updatedItem = { ...existingItem , amount : existingItem.amount - 1};
    //    updatedItems=[...state.items];
    //     updatedItem[existingCartItemIndex] = updatedItem
    const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
    updatedItems = [...state.items];
    updatedItems[existingCartItemIndex] = updatedItem;
    }
    return{
        items: updatedItems,
        totalAmount: updatedTotalAmount
    }
   
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  //! state is the last state snapshot
  //! action is dealt by u in your code to dispatch the action
  const [cartState, cartDispatchAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    cartDispatchAction({
      type: "ADD",
      item: item,
    });
  };
  const removeItemFromCartHandler = (id) => {
    cartDispatchAction({ type: "REMOVE", id: id });
  };

  //! just a constant which is an object
  const cartContext = {
    items: cartState.items, //! curState have access to items currently present
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler, //! just a pointer towards the function above
    removeItem: removeItemFromCartHandler, //! just a pointer towards the function above
  };
  //context has just value prop which points to the context
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
