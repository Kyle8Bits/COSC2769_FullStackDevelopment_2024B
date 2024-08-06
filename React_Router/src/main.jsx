import React from 'react'
import './style.css'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import MyAccount,{ loadAccount } from './pages/MyAccount'
import { loadProduct } from './pages/Product'
import Product from './pages/Product'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import Items, { loadItem } from './pages/Items'
import ProductIndex from './pages/ProductIndex'
import NotFound from './pages/NotFound'
import MyAccountEdit, { saveMyAccount } from './pages/MyAccountEdit'


const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>First page <Link to='/home'>Go to next page</Link></h1>,
    errorElement: <NotFound/>

  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/account',
    element: <MyAccount />,
    loader:loadAccount
  },
  {
    path: '/product',
    element: <Product />,
    loader:loadProduct,
    children:[
      {
        index: true,
        element: <ProductIndex/>
      },
      {
      path:':productID',
      element: <Items/>,
      loader:loadItem
      }
    ]
  },
  {
    path: '/account/edit',
    element: <MyAccountEdit/>,
    action: saveMyAccount,
    loader: loadAccount
  }
 
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
