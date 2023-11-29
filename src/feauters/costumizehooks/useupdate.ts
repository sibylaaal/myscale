
import { Axios } from '../../axios/api';

  
  export const useUpdate = async (endpoint: string, payload: Array<string | number | boolean>) =>
   {
  
     return await Axios.put(endpoint, payload);
  };
  