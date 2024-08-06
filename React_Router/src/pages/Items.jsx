import React from 'react'
import { getProductID } from '../api/product'
import { useLoaderData } from 'react-router-dom';

export async function loadItem({params}){
  console.log(params)
  const item = await getProductID(parseInt(params.productID));
  return item
}

function Items() {
  const item = useLoaderData();



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
