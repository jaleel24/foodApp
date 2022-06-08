import { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  
  //! we are using the tempalte literal so that we can embed the $ sign togethor with the actual totalAmount
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemsAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };

  const cartItemsRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((items) => (
        <CartItem
          key={items.id}
          name={items.name}
          price={items.price}
          amount={items.amount}
          onRemove={cartItemsRemoveHandler.bind(null,items.id)} //! this ensures that the id of the item is passed thorugh the function so that it will be added
          onAdd={cartItemsAddHandler.bind(null,items)}
        />
      ))}
      {/* {[{ id: "c1", name: "fish", amount: "2", price: "12.99" }].map(
        (items) => (
          <li>{items.name}</li>
        )
      )} */}
    </ul>
  );
  return (
    <Modal onClose={props.hide}>
      {cartItems}
      <div class="text-sm font-bold font-sans py-3">
        <span class="text-xl">Total Amount</span>
        <span class="flex justify-end text-xl">{totalAmount}</span>
      </div>
      <div class="flex gap-4 justify-end px-1 pb-3 text-sm font-bold font-sans">
        <button
          class="bg-white hover:bg-slate-50 border-2 border-orange-700 rounded-xl px-3 "
          onClick={props.hide}
        >
          Close
        </button>

        {hasItems && (
          <button class="bg-orange-800 hover:bg-orange-700 rounded-xl px-3 text-white ">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
