// import vector from "../assets/vector.png";
// import Icons from "../assets/Icons.png";
import "./index.css";

const Header = () => {
  return (
    <div className="header-main-container">
      <div className="header-container">
        <div className="header-logo-container">
          <img
            src="/assets/vector.png"
            className="vector-image"
            alt="vector-logo"
          />
          <h1>Logo</h1>
          <img src="/assets/Icons.png" className="icon-image" alt="" />
        </div>
        <ul className="nav-btns">
          <li>SHOPS</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Header;
