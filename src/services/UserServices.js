import {baseService} from './baseService';
export class UserServices extends baseService {
  getAllDocumentsUser = () => {
    return this.get(`api/user/documents`);
  }
  changeStatusDocument = (id) => {
    return this.get(`api/user/${id}/change-status`);
  }
}

export const userServices = new UserServices();