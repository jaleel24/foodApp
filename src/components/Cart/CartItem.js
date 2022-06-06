
const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="flex justify-between py-4 font-bold">
      
      <div>
        <h2>{props.name}</h2>
        <div class="text-orange-700 py-4">
          <span>{price}</span>
          <span class=" text-black border-2 rounded mx-10 px-2 py-1">x{props.amount}</span>
        </div>
      </div>
      <div class="flex justify-end pb-10">
        <button class="border border-orange-900 px-3 mx-3 rounded text-orange-900 hover:bg-orange-900 hover:text-white" onClick={props.onRemove}>−</button>
        <button class="border border-orange-900 px-3 mx-3 rounded text-orange-900 hover:bg-orange-900 hover:text-white" onClick={props.onAdd}>+</button>
      </div> 
    </li>
    
  );
};

export default CartItem;
