import { User } from "./user"
import { Category } from "./category"

export class Post {
    id: number
    creator: number
    creator_data: User
    title: string
    text: string
    active: boolean
    creation_date: string
    categories: Array<Category>

    constructor(creator: number, title: string, text: string, categories: Array<Category>) {
        this.creator = creator
        this.title = title
        this.text = text
        this.active = true
        this.creation_date = new Intl.DateTimeFormat("en-CA").format(new Date())
        this.categories = categories
    }
}