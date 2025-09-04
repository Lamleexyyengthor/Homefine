import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import {Homepage} from '../homepage/Homepage'
import { Roommanage } from '../roommanage/Roommanage'
import { Managet } from '../managet/Managet'
import AllRoom from '../roommanage/AllRoom'
import { Rented } from '../roommanage/Fullroom'
import { Emty } from '../roommanage/Emty'
import { Payment } from '../payment/Payment'
import { AllPayment } from '../payment/AllPayment'
import { Wait } from '../payment/Wait'
import { Historypay } from '../payment/Historypay'
import { FormCards }   from '../payment/FormCard'
import { HistoryDebt } from '../payment/HisDebt'
import { Checkin } from '../checkin/Checkin'
import { Allcheckin } from '../checkin/Allceckin'
import { Hischeck } from '../checkin/Hischeck'
import { Checkout } from '../checkout/Checkout'
import { Allcheckout } from '../checkout/Allcheckout'
import { Historycheckout } from '../checkout/Historycheckout'
import { Reportpro } from '../reportproblem/reportpro'
import { Allreport } from '../reportproblem/Allreport'
import { Waitreport } from '../reportproblem/Waitreport'
import { Beingreport } from '../reportproblem/Beingreport'
import { Successreport } from '../reportproblem/Successreport'
import { Contract } from '../contractroom/Contract'
import { LeaseAgrement } from '../contractroom/LeaseAgrement'
import { RentalReceipt } from '../contractroom/RentalReceipt'
import { Report } from '../Reportss/Report'
import { Login } from '../../pages/auth/Login'
import { Manage } from '../manage-reservations/Manage'
import { Manage1 } from '../manage-reservations/Manage1'
import { History } from '../manage-reservations/History'
import { Register } from '../../pages/auth/Register'
// import { Managets } from '../managet/Managets'

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {

        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Homepage/>
            },
            {
                path: "bookings",
                element: <Manage/>,
                children: [
                    {
                        index: "manage1",
                        element: <Manage1/>
                    },
                    {
                        path: "history",
                        element: <History/>
                    }
                ]
            },
            {
                path: "rooms",
                element: <Roommanage/>,
                children: [
                    {
                        index: "allRoom",
                        element: <AllRoom/>
                    },
                    {
                        path: "rentRoom",
                        element: <Rented/>
                    },
                    {
                        path: "emty",
                        element: <Emty/>
                    }
                ]
            }, 
            {
                path: "tenants",
                element: <Managet/>,
                // children: [
                //     {
                //         index: true,
                //         element: <Managet/>
                //     }
                // ]
            },
            {
                path: "payments",
                element: <Payment/>,
                children: [
                    {
                        index: "allPayment",
                        element: <AllPayment/>
                    },
                    {
                        path: "waitPayment",
                        element: <Wait/>
                    },
                    {
                        path: "historypay",
                        element: <Historypay/>
                    },
                    {
                        path: "debt",
                        element: <FormCards/>
                    },
                    {
                        path: "hisDebt",
                        element: <HistoryDebt/>
                    }
                ]
            },
            {
                path: "checkin",
                element: <Checkin/>,
                children: [
                    {
                        index: "allCheckin",
                        element: <Allcheckin/>
                    },
                    {
                        path: "hischeckout",
                        element: <Hischeck/>
                    }
                ]
            },
            {
                path: "checkout",
                element: <Checkout/>,
                children: [
                    {
                        index: "allcheckout",
                        element: <Allcheckout/>
                    },
                    {
                        path: "historycheckout",
                        element: <Historycheckout/>
                    }
                ]
            },
            {
                path: "reportproblem",
                element: <Reportpro/>,
                children: [
                    {
                    index: true,
                    element: <Allreport/>
                    },
                    {
                        path: "waitreport",
                        element: <Waitreport/>
                    },
                    {
                        path: "beingreport",
                        element: <Beingreport/>
                    },
                    {
                        path: "successreport",
                        element: <Successreport/>
                    }
                    
                ]
            },
            {
                path: "contracts",
                element: <Contract/>,
                children: [
                    {
                        index: true,
                        element: <LeaseAgrement/>
                    },
                    {
                        path: "rentalReceipt",
                        element: <RentalReceipt/>
                    }
                ]
            },
            {
                path: "reports",
                element: <Report/>
                
            },
           
           
        ]
    },
    
])
export const Route = () => {
  return (
   <RouterProvider router={router} />
  )
}
