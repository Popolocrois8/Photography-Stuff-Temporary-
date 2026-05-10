import "./BottomNav.css";

import{
    FiMap,
    FiCompass,
    FiImage,
    FiUser,
}from "react-icons/fi";

const BottomNav = () =>{
    return(
        <nav className="bottom-nav">
            <button className="nav-item active">
                <FiMap size = {20}/>
                <span>Map</span>
            </button>

            <button className="nav-item">
                <FiCompass size = {20}/>
                <span>Discover</span>
            </button>

            <button className="nav-item">
                <FiImage size = {20}/>
                <span>Portfolio</span>
            </button>

            <button className="nav-item">
                <FiUser size = {20}/>
                <span>profile</span>
            </button>

        </nav>
    );
};

export default BottomNav;
