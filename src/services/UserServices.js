import {baseService} from './baseService';
export class UserServices extends baseService {
  getAllDocumentsUser = () => {
    return this.get(`api/user/documents`)
  }
}

export const userServices = new UserServices();