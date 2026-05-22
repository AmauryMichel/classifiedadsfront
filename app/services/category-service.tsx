import { axiosInterceptor } from "~/core/interceptor"
import { Category } from "~/types/category"

export class CategoryService {
    private baseUrl = import.meta.env.VITE_API_URL
    private categoriesUrl = "categories"

    getCategories() {
        return axiosInterceptor.get(`${this.baseUrl}/${this.categoriesUrl}/`)
    }
}