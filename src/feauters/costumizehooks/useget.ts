import { Axios } from '../../axios/api';





export const useGet=(endpoint:string)=>{
        const Getitems=()=>{
            return Axios.get(endpoint)
        }
      return Getitems


}