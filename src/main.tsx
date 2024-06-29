import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Registr from "./Components/Registr/Registr.tsx";
import {NewAccount} from "./Components/NewAccount/NewAccount.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LogInWind} from "./Components/LogInWind/LogInWind.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Registr/>,
        // errorElement:<ErrorPage/>,
        children:[
            {
                path:"/registration",
                element: <NewAccount/>
            },
            {
                path:"/login",
                element: <LogInWind/>
            },
        ]
    },
    // {
    //     path: '/workwindow',
    //     element:<WorkWindOne/>
    // }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
