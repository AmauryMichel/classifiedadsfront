import { axiosInterceptor } from "~/core/interceptor"
import { Post } from "~/types/post"

export class PostService {
    private baseUrl = import.meta.env.VITE_API_URL
    private postsUrl = "posts"

    getPosts() {
        return axiosInterceptor.get(`${this.baseUrl}/${this.postsUrl}/`)
    }

    getPost(postId: number) {
        return axiosInterceptor.get(`${this.baseUrl}/${this.postsUrl}/${postId}`)
    }

    createPost(post: Post) {
        return axiosInterceptor.post(`${this.baseUrl}/${this.postsUrl}/`, post)
    }

    editPost(postId: string, newPostData: Post) {
        return axiosInterceptor.patch(`${this.baseUrl}/${this.postsUrl}/${postId}/`, newPostData) 
    }

    deletePost(postId: string) {
        return axiosInterceptor.delete(`${this.baseUrl}/${this.postsUrl}/${postId}/`)
    }
}