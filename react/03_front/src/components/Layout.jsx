import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top shadow-sm">
        <div className="container-lg">
          <a href="#" className="navbar-brand fw-bold">
            Talento Tech
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbatNav"></button>
          <ul className="navbar-nav mx-auto" id="navbatNav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/empleados" className="nav-link">
                Empleados
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/nosotros" className="nav-link">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contactanos" className="nav-link">
                Contactanos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <section>
        <div className="container">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Layout;
