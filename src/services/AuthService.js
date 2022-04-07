import { baseService } from "./baseService";

export class AuthService extends baseService {
  login = (data) => {
    return this.post(`api/auth/admin/login`, data)
  }
  loginWithGoogle = (data) => {
    return this.post(`api/auth/google`, {'data': data})
  }
}

export const authService = new AuthService();