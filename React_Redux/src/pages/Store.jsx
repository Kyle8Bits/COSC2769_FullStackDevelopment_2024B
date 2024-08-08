import React from 'react'
import ProductList from '../features/products/ProductList'
import Cart from '../features/cart/Cart'
import '../style.css'
import { Link } from 'react-router-dom'

function Store() {
  console.log('Store rendering');

  return (
    <>
      <Link to="/" className="return-link">Return to Login</Link>
      <Cart/>
      <ProductList/>
  </>
  )
}

export default Store