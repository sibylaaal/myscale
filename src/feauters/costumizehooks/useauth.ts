import { useEffect } from "react"
import { useSelector } from "react-redux"

import { useNavigate } from "react-router-dom";


const navigation=useNavigate()

const UseAuth=()=>{
const Auth=useSelector((state:any)=>state.Auth.isLogged)
const user=useSelector((state:any)=>state.Auth.user)
useEffect(()=>{
if(Auth){
   user.role==="admin"?  navigation("/admin/dashboard"):navigation("/user/dashboard")
 }else{
navigation('/login')
        }

    },[Auth])
}
export default UseAuth