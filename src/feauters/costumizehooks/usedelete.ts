import { Axios } from '../../axios/api';
  
  export const useDelete = async (endpoint: string) =>
   {
     return await Axios.delete(endpoint);
  };
  