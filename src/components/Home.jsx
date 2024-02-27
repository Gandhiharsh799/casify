import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import  '../index.css';
export default function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light nav-flex p-3">
        <div className="container-fluid ">
          <Link className="navbar-brand d-flex" to="/">
            <h1 className="nav-label">Casify</h1>
            <span>
              <img
                height="50px"
                width="50px"
                src={logoImg}
                alt="casify logo"
                className="rounded"
              />
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  <p className='nav-label fs-5 pt-1'>Home</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="login">
                  <button className='btn primary btn-lg login-button'>Login</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
