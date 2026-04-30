import type { Route } from "./+types/post-create";

import { Post } from "~/types/post";

import { PostService } from "~/services/post-service";
import { useEffect } from "react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Create a new post" },
    { name: "description", content: "Post creation page" },
  ];
}

let postService: PostService = new PostService()

export default function PostCreate() {

  const createPost = (event: any) => {
    event.preventDefault()

    const title = event.target.title.value
    const text = event.target.text.value

    const userId = JSON.parse(localStorage.getItem("userId") || "")

    const newPost = new Post(userId, title, text, [])

    postService.createPost(newPost).then(response => {
      console.log(response)
    })
  }

  return (
    <div>
      <h2>Login to your account</h2>
      <form className="formClass" onSubmit={createPost}>
        <input className="formInput" id="title" type="text" placeholder="Post title" required />
        <input className="formInput" id="text" type="text" placeholder="Post text" required />

        <button className="submitButton" type="submit">Submit</button>
      </form>
    </div>
  )
}
