import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import {Homepage} from '../homepage/Homepage'
import Manage1 from '../manage-reservations/Manage1'
import { Roommanage } from '../roommanage/Roommanage'
import { Managet } from '../managet/Managet'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Homepage/>
            },
            {
                path: "/bookings",
                element: <Manage1/>
            },
            {
                path: "/rooms",
                element: <Roommanage/>
            }, 
            {
                path: "/tenants",
                element: <Managet/>
            }
           
        ]
    },
    
])
export const Route = () => {
  return (
   <RouterProvider router={router} />
  )
}
