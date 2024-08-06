import React from 'react'
import { useDispatch } from 'react-redux'
import { increase, decrease } from './productSlice';
import { addToCart } from '../cart/cartSlice';

function Product({info}) {
    const {id, name, price, quantity} =info;
    const dispatch = useDispatch();

  return (
    <div className="product">
        <h2>{id} - {name}</h2>
        <div>Price: ${price}</div>
        <button className='add' onClick={()=> {
          dispatch(addToCart({id:id}))
          dispatch(decrease({id:id}))
        }}> Add to cart</button>
        <div>
            <button onClick={()=> dispatch(increase({id:id}))}> + </button>
            Quantity: {quantity}
            <button onClick={()=> dispatch(decrease({id:id}))}> - </button>
        </div>
    </div>
  )
}

export default Product