import {Fragment , useState} from "react";
import './App.css';
import Header from './components/Layout/Header';
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
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
   <Fragment>
     {/* < Cart hide={hideCartHandler}/>  */}
     {cartIsVisible && < Cart hide={hideCartHandler} /> }
      <Header show={showCartHandler} ></Header>
        <main>
          <Meals/>
        </main>
   </Fragment>
  );
}

export default App;
