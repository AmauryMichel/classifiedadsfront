import { axiosInterceptor } from "~/core/interceptor"
import { User } from "~/types/user"

export class AuthentificationService {
    private baseUrl = import.meta.env.VITE_API_URL
    private authUrl = "auth"
    private registerUrl = "register"
    private loginUrl = "login"

    register(user: User) {
        return axiosInterceptor.post(`${this.baseUrl}/${this.authUrl}/${this.registerUrl}/`, user)
    }

    login(user: User) {
        return axiosInterceptor.post(`${this.baseUrl}/${this.authUrl}/${this.loginUrl}/`, user)
    }
}