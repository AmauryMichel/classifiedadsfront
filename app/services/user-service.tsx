import { axiosInterceptor } from "~/core/interceptor"

export class UserService {
    private baseUrl = import.meta.env.VITE_API_URL
    private usersUrl = "users"
    private postsUrl = "posts"

    getUserPosts(userId: number) {
        return axiosInterceptor.get(`${this.baseUrl}/${this.usersUrl}/${userId}/${this.postsUrl}/`)
    }
}