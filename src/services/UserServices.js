import {baseService} from './baseService';
export class UserServices extends baseService {
  getAllDocumentsUser = () => {
    return this.get(`api/user/documents`);
  }
  changeStatusDocument = (id, data) => {
    return this.patch(`api/user${id}/change-status`, data);
  }
}

export const userServices = new UserServices();