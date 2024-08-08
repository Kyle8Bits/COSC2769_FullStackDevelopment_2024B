import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import Product from './Product';
import { fetchProduct } from './productSlice';
import { useDispatch } from 'react-redux';

function ProductList() {
   console.log('ProductList component rendered');
    const dispath = useDispatch();
    const products = useSelector((state) => state.products);
    let productList = products.map(p=> <Product key={p.id} info ={p}/>)

    const first = useRef(true);

    useEffect(()=>{
      if(first.current){
        dispath(fetchProduct());
        first.current=false
      }
    },[]);

    if(products.length > 0){
      return (
        <>
        <h1>Product List</h1>
        <div id="productList">
            {productList}
        </div>
        </>
      )
    }
    return(
      <h1>Loading....</h1>
    )

}

export default ProductList
