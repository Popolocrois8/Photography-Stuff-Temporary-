import "./Header.css";

const Header = () =>{
    return(
        <header className="header">
            <div className="logo">
                PhotoLoc
            </div>

            <nav className="nav-links">
                <a href="#">Explore</a>
                <a href="#">Location</a>
                <a href="#">About</a>
            </nav>
        </header>
    );
};

export default Header;