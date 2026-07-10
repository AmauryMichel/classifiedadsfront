import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import type { Route } from "./+types/post-detail";
import { Post } from "~/types/post";

import { PostService } from "~/services/post-service";

import './post-detail.css'

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
    const [canEdit, setCanEdit] = useState<Boolean>(false)
    const [editing, setEditing] = useState<Boolean>(false)
    let navigate = useNavigate()

    useEffect(() => {
        // TODO handle error
        if (id == undefined) return

        postService.getPost(parseInt(id)).then(response => {
            setPost(response.data)

            setCanEdit(localStorage.getItem("userId") == response.data.creator_data.id)
        })
    }, [])

    function editPost() {
        setEditing(!editing)

        if (editing == true) {
            postService.editPost(id!, post!).then(response => {
                console.log(response)
            })
        }
    }

    function deletePost() {
        if (!window.confirm("Are you sure you wish to delete this post?")) return
        
        postService.deletePost(id!).then(response => {
            toast.success("Post successfully deleted")
            navigate("/posts")
        })
    }

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setPost({ ...post!, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="postBody">
                <div className="postTitle">
                    {editing ?
                        (<input type="text" name="title" value={post?.title} onChange={onChangeHandler} />) :
                        (<>{post?.title}</>)
                    }
                    <hr />
                </div>
                <div className="postContent">
                    {editing ?
                        (<input type="text" name="text" value={post?.text} onChange={onChangeHandler} />) :
                        (<>{post?.text}</>)
                    }

                    {canEdit && (
                        <div className="settingsButton">
                            <button id="editButton" onClick={editPost}>Edit</button> <br />
                            <button id="deleteButton" onClick={deletePost}>Delete</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}