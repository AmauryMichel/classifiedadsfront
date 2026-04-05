import axios from "axios"
import { User } from "~/types/user"

export class AuthentificationService {
    private baseUrl = "http://localhost:8000"
    private authUrl = "auth"
    private registerUrl = "register"

    register(user: User) {
        return axios.post(this.baseUrl + "/" + this.authUrl + "/" + this.registerUrl + "/", user)
    }
}