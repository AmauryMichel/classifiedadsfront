import { axiosInterceptor } from "~/core/interceptor"

export class UserService {
    private baseUrl = "http://localhost:8000"
    private usersUrl = "users"
    private postsUrl = "posts"

    getUserPosts(userId: number) {
        return axiosInterceptor.get(`${this.baseUrl}/${this.usersUrl}/${userId}/${this.postsUrl}/`)
    }
}