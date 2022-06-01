const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "fish", amount: "2", price: "12.99" }].map(
        (items) => {
          <li>{items.name}</li>;
        }
      )}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div>
          <span>Total Amount</span>
          <span>33.52</span>
      </div>
      <div>
          <button>Close</button>
          <button>Order</button>
      </div>
    </div>
  );
};

export default Cart;
