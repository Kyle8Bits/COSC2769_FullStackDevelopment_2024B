import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../feature/productSlice';


function Items() {
let { productID } = useParams()

const item = useSelector((state)=> getProduct(state,productID));


  console.log(item)

  return (
    <div >
        <h2>Product Detail</h2>
        <ul>
          <p>ID: {item.id}</p>
          <p>Name: {item.name}</p>
          <p>Description: {item.description}</p>
          <p>Price: {item.price}</p>
          <p>Weight: {item.weight}</p>

        </ul>


    </div>
  )
}

export default Items
