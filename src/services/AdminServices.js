import {baseService} from './baseService';

export class AdminServices extends baseService {
  getAllDocument = () => {
    return this.get(`api/admin/documents`);
  }
}
export const adminServices = new AdminServices();
