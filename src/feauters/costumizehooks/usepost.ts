import { Axios } from "../../axios/api"


type Payload = {
  endpoint: string;
  payload: Array<string | number | boolean>;
  
};

export const usePost = async (endpoint: string, payload: Array<string | number | boolean>): Promise<Payload> =>
 {

   return await Axios.post(endpoint, payload);
};
