import "../assets/css/Header.css";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo192.png";

export default function Header() {
  return (
    <>
      <header className="header-wrapper">
        <nav className="navbar-content container">
          <div className="logo-wrapper">
            <img src={Logo} alt="" />
          </div>

          <ul className="list-link-wrapper">
            <li>
              <Link className="list-link" to={"/"}>
                About
              </Link>
            </li>
            <li>
              <Link className="list-link" to={"/"}>
                Author
              </Link>
            </li>
            <li>
              <Link className="list-link" to={"/"}>
                Company
              </Link>
            </li>
          </ul>

          <div className="user-actions">
            <Link to={"/register"}>
              <button className="btn signup-btn">Sign Up</button>
            </Link>
            <Link to={"/login"}>
              <button className="btn login-btn">Login</button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
