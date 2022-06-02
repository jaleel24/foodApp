import Modal from "../UI/Modal";
const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "fish", amount: "2", price: "12.99" }].map(
        (items) => (
          <li>{items.name}</li>
        )
      )}
    </ul>
  );
  return (
    <Modal>
      {cartItems }
      <div class="text-sm font-bold font-sans py-3">
          <span class="text-xl">Total Amount</span>
          <span class="flex justify-end text-xl">33.52</span>
      </div>
      <div class="flex gap-4 justify-end px-1 pb-3 text-sm font-bold font-sans">
          <button class="bg-white hover:bg-slate-50 border-2 border-orange-700 rounded-xl px-3 ">Close</button>
          
          <button class="bg-orange-800 hover:bg-orange-700 rounded-xl px-3 text-white ">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
