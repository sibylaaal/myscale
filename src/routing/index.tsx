import { createBrowserRouter } from "react-router-dom";
import Loginelements from "../layouts/Auth/login";
import { Register } from "../layouts/Auth/register";
import MainLayout from "../layouts/mainlayout";
import Dashbaord from "../layouts/dashboard/user/dashboard";
import Body from "../layouts/dashboard/components/body";
import Listing from "../layouts/dashboard/components/listing";
import Pulling from "../layouts/dashboard/components/pulling";
import Tasks from "../layouts/dashboard/components/tasks";
import Stats from "../layouts/dashboard/components/stats";
import Profile from "../layouts/dashboard/components/profile";
import Modelcompo from "../layouts/dashboard/landinglayout";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {

                path:"home",
                element:<Modelcompo/>
            },
          
            {
                path:"login",
                element:<Loginelements/>

            },
            {
                path:"register",
                element:<Register/>

            },
            

        ]
    },
    {
        path:"/user",

        element:<Dashbaord/>,
        children:[
            {
                path:"",
                element:<Body/>
            },
            {
                path:"data",
                element:<Listing/>
            },
            {
        path:"pulling",
        element:<Pulling/>

            },
            {
                path:"task",
                element:<Tasks/>
            },
            {
                path:"stats",
                element:<Stats/>
            },
            {
                path:"profile",
                element:<Profile/>
            }
        ]
    }
 
])