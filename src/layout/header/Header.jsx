import { NavLink } from "react-router";
import "./Header.css";

function Header() {
  return (
    <header className="main-header">
      <input type="checkbox" className="check-menu" id="check-menu" />
      <label className="burger-menu" htmlFor="check-menu">
        <div className="burger-line" />
      </label>
      <div className="header-logo">
        <img
          src="/src/assets/images/logo_guri.png"
          alt="Logo de Header"
          className="header-img"
        />
      </div>
      <nav className="nav-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/">
              <span>Home</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about">
              <span>Nosotros</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register">
              <span>Registro</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/products">
              <span>Administrar</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact">
              <span>Contacto</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="user-info">
        <div className="user-data">
          <div className="user-name">Macchioli Nicolás</div>
          <img
            className="user-image"
            src="/src/assets/images/user-img.avif"
            alt=""
          />
        </div>
        <div className="user-cart">
          <i className="fa-solid fa-cart-shopping" />
        </div>
      </div>
    </header>
  );
}

export default Header
