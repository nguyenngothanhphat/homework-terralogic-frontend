import  Axios  from "axios"
import { DOMAIN } from "../utils/constants/settingSystem"

export class baseService {
  get = (url) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: 'GET'
    })
  };
  post = (url, data) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: 'POST',
      data: data
    })
  };
  put = (url, data) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: 'PUT',
      data: data
    })
  };
  delete = (url) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: 'DELETE'
    })
  }
}