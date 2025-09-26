import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <i className="fa-solid fa-mug-hot" aria-hidden="true"></i>
          <p className="logo"><b>Lattelab</b></p>
        </div>

        <div className="container-navbar">
          <nav className="navbar container">
            <ul className="menu">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/menu">Menú</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;