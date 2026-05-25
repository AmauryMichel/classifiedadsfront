import { axiosInterceptor } from "~/core/interceptor"

export class UserService {
    private baseUrl = import.meta.env.VITE_API_URL
    private usersUrl = "users"
    private postsUrl = "posts"

    getUser(userId: string) {
        return axiosInterceptor.get(`${this.baseUrl}/${this.usersUrl}/${userId}`)
    }

    getUserPosts(userId: string) {
        return axiosInterceptor.get(`${this.baseUrl}/${this.usersUrl}/${userId}/${this.postsUrl}/`)
    }
}