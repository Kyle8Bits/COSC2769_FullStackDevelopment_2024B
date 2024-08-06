import React from 'react'
import { getProduct } from '../api/product'
import { Outlet, useLoaderData , useNavigation, Link} from 'react-router-dom';
import Header from '../components/Header';

export async function loadProduct(){
    const products = await getProduct();
    return products;
}

function Product() {
    const productSet =  useLoaderData();
    const navigation = useNavigation();
    const productList = productSet.map((pro)=>
        <li key={pro.id}>
          <Link to={`${pro.id}`}>
            {pro.name}
          </Link>
        </li>
    );

    console.log(navigation);
    console.log(productList)

  return (
    <>
    <Header/>
    <div className='detail'>
      <div>
        <h1>Product</h1>
        <ul>
        {productList}
        </ul>
      </div>

      <div>
        {navigation.state === 'idle' && <Outlet />}
        {navigation.state !== 'idle' && 'Loading'}
      </div>
    </div>
</>

  )
}

export default Product
