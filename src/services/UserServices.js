import {baseService} from './baseService';
export class UserServices extends baseService {
  getAllDocumentsUser = (pageNumber) => {
    return this.get(`api/user/documents?pageNumber=${pageNumber}`);
  }
  changeReadingStatus = (id) => {
    return this.get(`api/user/${id}/changeReadingStatus`);
  }
  changeCompletedStatus = (id) => {
    return this.get(`api/user/${id}/changeCompletedStatus`)
  }
}

export const userServices = new UserServices();