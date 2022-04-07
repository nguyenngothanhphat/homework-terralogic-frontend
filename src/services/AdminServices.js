import {baseService} from './baseService';

export class AdminServices extends baseService {
  getAllDocument = () => {
    return this.get(`api/admin/documents`);
  }
  getAllDocumentById = (id) => {
    return this.get(`api/admin/documents/${id}`);
  }
  updateDocument = (data, id) => {
    return this.patch(`api/admin/documents/${id}`, data);
  }
  getAllUserUnassigned = (id) => {
    return this.get(`api/admin/documents/confirm/${id}`);
  }
  createDocument = (data) => {
    return this.post(`api/admin/documents`, data);
  }
  deleteDocument = (id) => {
    return this.delete(`api/admin/documents/${id}`);
  }
  assignUserForDocument = (id, data) => {
    return this.post(`api/admin/documents/${id}/assign`);
  }
}
export const adminServices = new AdminServices();
