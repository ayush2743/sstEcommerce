
import './App.css';
import Products from './components/Products/Products';
import { useEffect, useState } from "react";
function App() {

  let [cart, setCart] = useState({});

  function increaseQuantity(product) {
    const newCart = {...cart};
    if(!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1
      };
    }
    else {
      newCart[product.id].quantity++;
    }
    setCart(newCart);
  }

  function decreaseQuantity(product) {
    const newCart = {...cart};
    if(newCart[product.id].quantity > 1) {
      newCart[product.id].quantity--;
    }
    else {
      delete newCart[product.id];
    }
    setCart(newCart);
  }
  

  return (
    <div className="App">
        <Products cart = {cart} increaseQuantity = {increaseQuantity} decreaseQuantity={decreaseQuantity}/>
    </div>
  );
}

export default App;
