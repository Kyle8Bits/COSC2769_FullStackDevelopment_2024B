import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';

import Login from './components/Login';
import Profile from './components/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <><h1>Not Found</h1></>,
  },

  {
    path: "/profile",
    element: <Profile/>,
    errorElement: <><h1>Not Found</h1></>,

  }
])


const root = createRoot(document.getElementById('root'));
root.render(  
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);
