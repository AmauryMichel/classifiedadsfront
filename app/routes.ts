import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("register", "routes/auth/register.tsx"),
    route("login", "routes/auth/login.tsx"),
    route("posts", "routes/posts/post-list/post-list.tsx"),
    route("posts/create", "routes/posts/post-create/post-create.tsx"),
    route("posts/:id", "routes/posts/post-detail/post-detail.tsx"),
] satisfies RouteConfig;
