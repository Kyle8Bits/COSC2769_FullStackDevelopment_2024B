import React from 'react'
import './style.css'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import Items from './pages/Items'
import ProductIndex from './pages/ProductIndex'
import NotFound from './pages/NotFound'
import { Provider } from 'react-redux'
import { store } from './app/store'
import ProductList from './pages/ProductList'



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
    path: '/product',
    element: <ProductList />,
    children:[
      {
        index: true,
        element: <ProductIndex/>
      },
      {
      path:':productID',
      element: <Items/>,
      }
    ]
  }
 
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
