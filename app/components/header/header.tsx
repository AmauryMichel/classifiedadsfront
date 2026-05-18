import { Link } from "react-router";
import "./header.css"
import { useEffect, useState } from "react";

export default function Header() {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [userId, setUserId] = useState<String>()

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("token") != null)
        setUserId(localStorage.getItem("userId") || "")
    }, []);

    function logOut() {
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        localStorage.removeItem("user")
        window.location.href = "/"
    }

    return (
        <header id="header">
            <div id="headerLeft">
                <nav className="navHeader">
                    <Link className="headerLink" to="/">Home</Link>
                    <Link className="headerLink" to="/posts">Post List</Link>
                </nav>
            </div>
            <div id="headerRight">
                {isLoggedIn
                    ? <>
                        <Link className="headerLink" to={`/user/${userId}`}>Profile</Link>
                        <a className="headerLink" href="#" onClick={logOut}>Log out</a>
                    </>
                    : <Link to="/login">Log in</Link>
                }
            </div>
        </header>
    );
}