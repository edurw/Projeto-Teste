import axios from "axios";
import { Params } from "../types/login.type";

export const postLogin = async (config: Params, data: any) => {
  return await axios({
    ...config,
    url: `${config.baseUrl}`,
    data
  }).then ( (response) => {
    console.log(response)
    return {
        status: response.status,
        data: response.data
    }
  }).catch((error) =>{
    console.log(error)
    return {
        status: error.status,
        data: error.response
    }
  })
}
