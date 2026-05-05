import type { Route } from "./+types/post-create";

import { Post } from "~/types/post";
import { Category } from "~/types/category";

import { PostService } from "~/services/post-service";
import { CategoryService } from "~/services/category-service";
import { useEffect, useState } from "react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Create a new post" },
    { name: "description", content: "Post creation page" },
  ];
}

let postService: PostService = new PostService()
let categoryService: CategoryService = new CategoryService()

export default function PostCreate() {

  const [categories, setCategories] = useState<Category[]>([])

  function createPost(event: any) {
    event.preventDefault()

    const title = event.target.title.value
    const text = event.target.text.value
    // Get all categories selected by the user
    const categories: any[] = event.target.categories.selectedOptions
    // Get the value of the categories
    const categoriesArray = Array.from(categories).map(category => category.value)

    const userId = JSON.parse(localStorage.getItem("userId") || "")

    const newPost = new Post(userId, title, text, categoriesArray)

    postService.createPost(newPost).then(response => {
      console.log(response)
    })
  }

  useEffect(() => {
    categoryService.getCategories().then(response => {
      setCategories(response.data.results)
      console.log(response.data.results)
    })
  }, [])

  return (
    <>
      <h2>Login to your account</h2>
      <form className="formClass" onSubmit={createPost}>
        <input className="formInput" id="title" type="text" placeholder="Post title" required />
        <input className="formInput" id="text" type="text" placeholder="Post text" required />

        <select id="categories" multiple size={1}>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>

        <button className="submitButton" type="submit">Submit</button>
      </form>
    </>
  )
}
