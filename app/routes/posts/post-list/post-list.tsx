import type { Route } from "./+types/post-list";

import { Post } from "~/types/post";

import { UserService } from "~/services/user-service";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Post List" },
    { name: "description", content: "Post list" },
  ];
}

let userService: UserService = new UserService

export default function PostList() {

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const userId = Number(localStorage.getItem('userId'))
    userService.getUserPosts(userId).then(response => {
      setPosts(response.data)
    })
  }, [])

  return (
    <div className="postList">
      {posts.map(p => (
        <div className="post" key={p.id}>
          <b>{p.title}</b><br />
          {p.text}
        </div>
      ))}
    </div>
  )
}
