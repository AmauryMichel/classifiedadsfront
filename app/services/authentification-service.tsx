import axios from "axios"
import { User } from "~/types/user"

export class AuthentificationService {
    private baseUrl = "http://localhost:8000"
    private usersUrl = "users"

    createUser(user: User) {
        return axios.post(this.baseUrl + "/" + this.usersUrl + "/", user)
    }
}