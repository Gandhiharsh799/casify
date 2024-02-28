import { Link, Outlet } from "react-router-dom";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../index.css";
import { faBars} from "@fortawesome/free-solid-svg-icons";

export default function ReportLayout() {
  return (
    <>
      <header className="back ">
        <p className="fs-1 text-white pt-3 px-4">Casify</p>
        <nav className="navbar navbar-expand-lg px-2 ">
          <div className="container-fluid ">
            <button
              className="navbar-toggler border-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                
                
              ><FontAwesomeIcon icon={faBars} style={{color: 'white', height: '25px'}} /></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav pt-3 fs-5">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="dashboard"
                >
                  Dashboard
                </Link>
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="cases"
                >
                  Cases
                </Link>
                <Link className="nav-link text-white" href="#">
                  Services
                </Link>
                <Link className="nav-link text-white" href="#">
                  Documents
                </Link>
                <Link className="nav-link text-white" aria-disabled="true">
                  Tasks
                </Link>
                <Link className="nav-link text-white" aria-disabled="true">
                  Events
                </Link>
                <Link className="nav-link text-white" aria-disabled="true">
                  Invoice
                </Link>
                <li className="dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Settings
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                  </ul>
                </li>
              </div>
            </div>
            <div className="px-3">
              <Link
                className="dropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FontAwesomeIcon
                  className="dropdown-toggle"
                  icon={faUser}
                  style={{
                    height: "30px",
                    color: "white",
                    cursor: "pointer",
                  }}
                />
                <ul className="dropdown-menu" style={{ marginLeft: "-120px" }}>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                </ul>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="back">
        <p className="p-3 text-white">
          <FontAwesomeIcon icon={faCopyright} className="dropdown " /> 2024 All
          rights reserved - CaseFile 2024 Pvt. Ltd.
        </p>
      </footer>
    </>
  );
}
