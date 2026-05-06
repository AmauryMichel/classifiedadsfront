import type { Route } from "./+types/post-list";

import { Post } from "~/types/post";

import { UserService } from "~/services/user-service";
import { CategoryService } from "~/services/category-service";
import { useEffect, useState } from "react";
import type { Category } from "~/types/category";
import { Link } from "react-router";

import './post-list.css'

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Post List" },
    { name: "description", content: "Post list" },
  ];
}

let userService: UserService = new UserService()
let categoryService: CategoryService = new CategoryService()

export default function PostList() {

  const [posts, setPosts] = useState<Post[]>([])
  const [allPosts, setAllPosts] = useState<Post[]>([])
  const [categories, setCategories] = useState<Category[]>([])

  function filterPosts(event: any) {
    if (event.target.value === "") {
      setPosts(allPosts)
    } else {
      const categoryId = Number.parseInt(event.target.value)
      setPosts(allPosts.filter((post) => post.categories.includes(categoryId)))
    }
  }

  useEffect(() => {
    const userId = Number(localStorage.getItem('userId'))

    userService.getUserPosts(userId).then(response => {
      setPosts(response.data)
      setAllPosts(response.data)
    })

    categoryService.getCategories().then(response => {
      setCategories(response.data.results)
    })
  }, [])

  return (
    <>
      <div id="filter">
        Filter by category:
        <select id="categoryFilter" onChange={filterPosts}>
          <option value="">No filter</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>

      <div id="postList">
        {posts.map(post => (
          <Link to={`/posts/${post.id}`}>
            <div className="post" key={post.id}>
              <b>{post.title}</b>
              <hr />
              {post.text}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
