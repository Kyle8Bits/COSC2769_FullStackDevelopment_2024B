import React from "react";
import ProductList from "./features/products/ProductList";
import Cart from "./features/cart/Cart";
import './style.css'

function App() {
  return (
    <div>
      <Cart/>
      <ProductList/>
    </div>
  );
}

export default App;
