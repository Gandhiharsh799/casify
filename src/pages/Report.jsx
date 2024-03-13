import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../index.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { useState } from "react";

export default function ReportLayout() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false);
  };

  function handleNavigate() {
    navigate("/login");
  }

  function handleNavigateUser() {
    navigate("/report/setting/userprofile");
  }

  return (
    <>
      <header className="back">
        <Link to="/report/dashboard" className="text-decoration-none">
          <p className="fs-1 text-white pt-3 px-4">Casify</p>
        </Link>
        <Navbar
          expand="lg"
          expanded={expanded}
          onToggle={handleToggle}
          className="px-4"
        >
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-white"
          >
            <span>
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: "white", height: "25px" }}
              />
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="pt-2 text-center mt-2"
                as={NavLink}
                to="/report/dashboard"
                onClick={handleLinkClick}
              >
                <small className="px-2 fs-5">Dashboard</small>
              </Nav.Link>
              <Nav.Link
                className="pt-2 text-center mt-2"
                as={NavLink}
                to="/report/cases"
                onClick={handleLinkClick}
              >
                <small className="px-2 fs-5">Cases</small>
              </Nav.Link>
              <Nav.Link
                className="pt-2 text-center mt-2"
                as={NavLink}
                to="/report/services"
                onClick={handleLinkClick}
              >
                <small className="px-2 fs-5">Services</small>
              </Nav.Link>
              <Nav.Link
                className="pt-2 text-center mt-2"
                as={NavLink}
                to="/report/documents"
                onClick={handleLinkClick}
              >
                <small className="px-2 fs-5">Documents</small>
              </Nav.Link>
              <Nav.Link
                className="pt-2 text-center mt-2"
                as={Link}
                to="/report/tasks"
                onClick={handleLinkClick}
              >
                <small className="px-2 fs-5">Tasks</small>
              </Nav.Link>
              <Nav.Link
                className="pt-2 text-center mt-2"
                as={Link}
                to="/report/events"
                onClick={handleLinkClick}
              >
                <small className="px-2 fs-5">Events</small>
              </Nav.Link>
              <Nav.Link
                className="pt-2 text-center mt-2"
                as={NavLink}
                to="/report/invoice"
                onClick={handleLinkClick}
              >
                <small className="px-2 fs-5">Invoice</small>
              </Nav.Link>
              <NavDropdown
                as={Link}
                title="Settings"
                className="pt-2 fs-5 text-decoration-none text-center"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/report/setting/userprofile"
                  className="text-white hover fw-bold we"
                >
                  User Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/report/setting/"
                  className="text-white hover fw-bold"
                >
                  Service Types
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/report/setting/"
                  className="text-white hover fw-bold"
                >
                  Case Types
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          <Link
            className="dropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FontAwesomeIcon
              icon={faUser}
              style={{
                height: "30px",
                color: "white",
                cursor: "pointer",
              }}
            />
            <ul className="dropdown-menu drop">
              <li>
                <button
                  className="dropdown-item text-white hover fw-bold"
                  onClick={handleNavigate}
                >
                  <FontAwesomeIcon
                    className="px-2 "
                    icon={faRightFromBracket}
                  />
                  Logout
                </button>
              </li>
              <li>
                <button
                  onClick={handleNavigateUser}
                  className="dropdown-item text-white hover fw-bold"
                >
                  <FontAwesomeIcon className="px-2 " icon={faUser} />
                  User Profile
                </button>
              </li>
            </ul>
          </Link>
        </Navbar>
      </header>
      <main className="min-vh-75">
        <Outlet />
      </main>
      <footer className="back fixed-bottom">
        <p className="pt-3 px-4 text-white">
          <FontAwesomeIcon icon={faCopyright} className="dropdown " /> 2024 All
          rights reserved - CaseFile 2024 Pvt. Ltd.
        </p>
      </footer>
    </>
  );
}
