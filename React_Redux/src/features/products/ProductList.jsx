import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product';

function ProductList() {
    const products = useSelector((state) => state.products);
    let productList = products.map(p=> <Product key={p.id} info ={p}/>)
  return (
    <>
    <h1>Product List</h1>
    <div id="productList">
        {productList}
    </div>
    </>
  )
}

export default ProductList