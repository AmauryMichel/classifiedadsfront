import axios from "axios"
import { User } from "~/types/user"

export class AuthentificationService {
    private baseUrl = "http://localhost:8000"
    private usersUrl = "users"
    private authUrl = "auth"
    private registerUrl = "register"
    private loginUrl = "login"

    register(user: User) {
        return axios.post(this.baseUrl + "/" + this.authUrl + "/" + this.registerUrl + "/", user)
    }

    login(user: UserLogin) {
        return axios.post(this.baseUrl + "/" + this.authUrl + "/" + this.loginUrl + "/", user)
    }
}