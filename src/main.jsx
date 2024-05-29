import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import Root from './Components/Root.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import Orders from './Components/Orders.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import Profile from './Components/Profile.jsx'
import Dashboard from './Components/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>,
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
