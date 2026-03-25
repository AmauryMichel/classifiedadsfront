import { Link } from "react-router";
import "./header.css"

export default function Header() {
  return (
        <header>
            <nav className="navHeader">
                <Link to="/">Home</Link>
                <Link to="/posts">Post List</Link>
                <Link to="/profile">Profile</Link>
            </nav>
        </header>
    );
}