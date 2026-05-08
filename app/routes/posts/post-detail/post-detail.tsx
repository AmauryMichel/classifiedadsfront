import type { Route } from "./+types/post-detail";

import { Post } from "~/types/post";

import { PostService } from "~/services/post-service";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Post Detail" },
        { name: "description", content: "Post" },
    ];
}

let postService: PostService = new PostService()

export default function PostDetail() {

    const { id } = useParams();
    const [post, setPost] = useState<Post>()
    
    useEffect(() => {
        // TODO handle error
        if (id == undefined) return

        postService.getPost(parseInt(id)).then(response => {
            console.log(response.data)
            setPost(response.data)
        })
    }, [])

    return (
        <>
            {post?.title}<br/>
            {post?.text}
        </>
    )
}
