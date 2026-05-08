import { axiosInterceptor } from "~/core/interceptor"
import { Post } from "~/types/post"

export class PostService {
    private baseUrl = "http://localhost:8000"
    private postsUrl = "posts"

    getPosts() {
        return axiosInterceptor.get(`${this.baseUrl}/${this.postsUrl}/`)
    }

    getPost(id: number) {
        return axiosInterceptor.get(`${this.baseUrl}/${this.postsUrl}/${id}`)
    }

    createPost(post: Post) {
        return axiosInterceptor.post(`${this.baseUrl}/${this.postsUrl}/`, post)
    }
}