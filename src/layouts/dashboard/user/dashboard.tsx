import { Outlet } from "react-router-dom";
import Body from "../components/body";
import Nav from "../components/nav";



export default function Dashbaord(){
    return(


        <>
<div className="h-screen w-full    select-none">
    <div className="flex  scrollbar">
       <Nav/>

<Outlet/>
    </div>


</div>


        
        
        </>
    )
}