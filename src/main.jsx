import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import UserLayout from './components/user/UserLayout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contactus from './components/user/Contactus.jsx'
import LandingPage from './components/user/LandingPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout/>,
    children: [
      {
        index: true,
        element: <LandingPage/>
      },
      {
        path: '/contact-us',
        element: <Contactus/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
