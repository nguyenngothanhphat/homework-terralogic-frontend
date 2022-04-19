import {baseService} from './baseService';
export class UserServices extends baseService {
  getAllDocumentsUser = (pageNumber, sizePage) => {
    return this.get(`api/user/documents?pageNumber=${pageNumber}&pages=${sizePage}`);
  }
  changeReadingStatus = (id) => {
    return this.get(`api/user/${id}/changeReadingStatus`);
  }
  changeCompletedStatus = (id) => {
    return this.get(`api/user/${id}/changeCompletedStatus`)
  }
}

export const userServices = new UserServices();