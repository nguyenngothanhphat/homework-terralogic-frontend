import { baseService } from "./baseService";

export class AuthService extends baseService {
  login = (data) => {
    return this.post(`/auth/login`, data)
  }
}

export const authService = new AuthService();