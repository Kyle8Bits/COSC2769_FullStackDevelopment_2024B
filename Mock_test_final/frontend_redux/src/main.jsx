import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import Customer from './Customer.jsx'
import CustomerInfo from './CustomerInfo.jsx'
import './style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import {store} from '../redux/store.js'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <h1>Not Found</h1>
  }
  ,{
    path: '/customer',
    element: <Customer/>,
    errorElement: <h1>Not Found</h1>,
    children:[
      {
        path: ':id',
        element: <CustomerInfo/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
