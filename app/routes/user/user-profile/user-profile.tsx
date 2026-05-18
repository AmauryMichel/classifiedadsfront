import type { Route } from "./+types/user-profile";

import { Post } from "~/types/post";
import { User } from "~/types/user";

import { UserService } from "~/services/user-service";
import { CategoryService } from "~/services/category-service";
import { useEffect, useState } from "react";
import type { Category } from "~/types/category";
import { Link, useParams } from "react-router";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "User Profile" },
        { name: "description", content: "User Profile" },
    ];
}

let userService: UserService = new UserService()
let categoryService: CategoryService = new CategoryService()

export default function UserProfile() {

    const { id } = useParams();

    const [userData, setUserData] = useState<User>()
    const [posts, setPosts] = useState<Post[]>([])
    const [allPosts, setAllPosts] = useState<Post[]>([])

    useEffect(() => {
        if (id == undefined) return

        userService.getUser(id).then(response => {
            console.log(response)
        })

        userService.getUserPosts(id).then(response => {
            setPosts(response.data)
            setAllPosts(response.data)
        })
    }, [])

    return (
        <>
            <div id="userDetail">
                {userData?.first_name} <br />
                {userData?.last_name} <br />
                Number of posts: {posts.length}
            </div>
        </>
    )
}
