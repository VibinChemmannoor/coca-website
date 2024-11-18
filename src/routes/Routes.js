import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import ErrorPage from '../components/ErrorPage'

const Routes = () => {
    const routes = [
        {
            path:'/',
            element: <Home/>,
            errorElement:<ErrorPage/>
        }
    ]
    const router = createBrowserRouter(routes)
  return (
    <RouterProvider router={router}/>
  )
}

export default Routes
