import  Axios  from "axios"
import { DOMAIN, DOMAIN_TERRA,  TOKEN } from "../utils/constants/settingSystem"

export class baseService {
  get = (url) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
      }
    })
  };
  post = (url, data) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: 'POST',
      data: data,
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
      }
    })
  };
  put = (url, data) => {
    return Axios({
      url: `${DOMAIN_TERRA}/${url}`,
      method: 'PUT',
      data: data,
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
      }
    })
  };
  patch = (url, data) => {
    return Axios({
      url: `${DOMAIN_TERRA}/${url}`,
      method: 'PATCH',
      data: data,
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
      }
    })
  };
  delete = (url) => {
    return Axios({
      url: `${DOMAIN_TERRA}/${url}`,
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
      }
    })
  }
}