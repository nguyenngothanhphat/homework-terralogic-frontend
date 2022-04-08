import {baseService} from './baseService';
export class UserServices extends baseService {
  getAllDocumentsUser = () => {
    return this.get(`api/user/documents`);
  }
  changeReadingStatus = (id) => {
    return this.get(`api/user/${id}/changeReadingStatus`);
  }
}

export const userServices = new UserServices();