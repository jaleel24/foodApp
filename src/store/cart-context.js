import React from "react";

const cartContext =React.createContext({
    items:[],
    totalAmount:0,
    addItem : (items)=>{

    },
    removeItem:  (item)=>{}
});
export default cartContext;