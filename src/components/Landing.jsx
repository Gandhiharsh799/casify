import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import dashboard from "../assets/Dashboard.png";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 pt-5">
            <p className="hero-section-label">Get More Done with Casify</p>

            <p className="hero-section-label-two">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks.
            </p>
            <div className="pt-4">
              <Link to="login">
                <button className="btn btn-lg login-button">
                  Get Started{" "}
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-7 pt-3">
            <img src={dashboard} alt="dashboard" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
