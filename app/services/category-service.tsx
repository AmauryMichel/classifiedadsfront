import { axiosInterceptor } from "~/core/interceptor"
import { Category } from "~/types/category"

export class CategoryService {
    private baseUrl = "http://localhost:8000"
    private categoriesUrl = "categories"

    getCategories() {
        return axiosInterceptor.get(`${this.baseUrl}/${this.categoriesUrl}/`)
    }
}