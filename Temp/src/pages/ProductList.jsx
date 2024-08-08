
import { useSelector } from 'react-redux';
import { getProducts } from '../feature/productSlice';
import { Link, Outlet } from 'react-router-dom';

function ProductList() {
   console.log('ProductList component rendered');

   const products = useSelector((state)=> getProducts(state));

    if(products.length > 0){
      return (
        <>
        <h1>Product List</h1>
        <div id="productList">
          <ul>
            {products.map((product)=>{
              return(
                <Link
                style={{ display: "block" }}
                key={product.id}
                to={`${product.id}`}
              >
                {product.name}
              </Link>
              );
            })}
          </ul>
          <Outlet/>
        </div>
        </>
      )
    }
    return(
      <h1>Loading....</h1>
    )

}

export default ProductList
