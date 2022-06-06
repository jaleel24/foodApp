import { useState} from "react";
import './App.css';
import Header from './components/Layout/Header';
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App(props) {
  // use the state where we are using the component
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler =() => {
    setCartIsVisible(true);
  }
  const hideCartHandler = () => {
    setCartIsVisible(false)
  }
  return (
   <CartProvider>
     {/* < Cart hide={hideCartHandler}/>  */}
     {cartIsVisible && < Cart hide={hideCartHandler} /> }
      <Header show={showCartHandler} ></Header>
        <main>
          <Meals/>
        </main>
   </CartProvider>
  );
}

export default App;
