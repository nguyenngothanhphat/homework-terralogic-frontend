import {baseService} from './baseService';

export class AdminServices extends baseService {
  getAllDocument = (pageNumber) => {
    return this.get(`api/admin/documents?pageNumber=${pageNumber}`);
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
    return this.post(`api/admin/documents/${id}/assign`, data);
  }
  getTrashDocuments = () => {
    return this.get(`api/admin/documents/trashDocs`);
  }
  restoneDocument = (id) => {
    return this.patch(`api/admin/documents/${id}/restore`);
  }
}
export const adminServices = new AdminServices();
