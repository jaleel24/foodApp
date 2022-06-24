import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import CheckoutForm from "./checkoutForm";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [onShow, setonShow] = useState(false);
  const [onsubmit, setOnSubmit]= useState(false);
  const [didSubmit, setDidSubmit]= useState(false);
  //! we are using the tempalte literal so that we can embed the $ sign togethor with the actual totalAmount
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  // combined two conditions once click on order the checkout form should show and order button should be vanished
  const hasItems = cartCtx.items.length > 0;

  const cartItemsAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemsRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setonShow(true);
  };

  const submitOrderHandler = async(userData) => {
    setOnSubmit(true);
    await fetch('https://reacthttp-e48f0-default-rtdb.firebaseio.com/order.json', {
      method:'POST',
      body:JSON.stringify({
        user:userData,
        orderedItems: cartCtx.items
      })
    });
    setOnSubmit(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };
  
  //! to keep the JSX lean simply put two divs in the constant and render it conditonally down there
  const modalActions = (
    <div class="flex gap-4 justify-end px-1 pb-3 text-sm font-bold font-sans">
      <button
        class="bg-white hover:bg-slate-50 border-2 border-orange-700 rounded-xl px-3 "
        onClick={props.hide}
      >
        Close
      </button>

      {hasItems && (
        <button
          class="bg-orange-800 hover:bg-orange-700 rounded-xl px-3 text-white "
          onClick={orderHandler}
        >
          Order
        </button>
      )}
    </div>
  );
  const cartItems = (
    <ul>
      {cartCtx.items.map((items) => (
        <CartItem
          key={items.id}
          name={items.name}
          price={items.price}
          amount={items.amount}
          onRemove={cartItemsRemoveHandler.bind(null, items.id)} //! this ensures that the id of the item is passed thorugh the function so that it will be added
          onAdd={cartItemsAddHandler.bind(null, items)}
        />
      ))}
      {/* {[{ id: "c1", name: "fish", amount: "2", price: "12.99" }].map(
        (items) => (
          <li>{items.name}</li>
        )
      )} */}
    </ul>
  );
  const cartModalContent = <React.Fragment>
                             {cartItems}
                              <div class="text-sm font-bold font-sans py-3">
                                <span class="text-xl">Total Amount</span>
                                <span class="flex justify-end text-xl">{totalAmount}</span>
                              </div>
                              {onShow && <CheckoutForm onConfirmOrder= {submitOrderHandler} onCancel={props.hide}/>}
                              {!onShow && modalActions}
                        </React.Fragment>

      const isSubmittingModalContent = <p>Submitting order Data......</p>
      const didSibmitModalContent = <p class="text-green-600 animate-bounce">Successfully sent the order !</p>
  return (
    <Modal onClose={props.hide}>
     
     {!onsubmit && !didSubmit && cartModalContent}
     {onsubmit &&  isSubmittingModalContent}
     {!onsubmit && didSubmit && didSibmitModalContent}
    </Modal>
  );
};

export default Cart;
