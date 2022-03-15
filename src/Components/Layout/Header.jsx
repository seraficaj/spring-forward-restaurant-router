import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="nav">
                <div className="nav-center">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
