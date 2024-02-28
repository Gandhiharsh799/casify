import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Cases() {
  return (
    <div>
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex">
          <FontAwesomeIcon
            icon={faBriefcase}
            className="py-4 ps-4 pe-3"
            style={{ color: "#502cb7", height: "25px" }}
          />
          <p className="mt-3 fs-3 fw-bold">Cases</p>
        </div>
        <div className="d-flex">
          <button
            className="btn btn-lg rounded-pill m-3 fs-6"
            style={{ backgroundColor: "#502cb7", color: "white" }}
          >
            <FontAwesomeIcon icon={faPlus} className="px-1" />
            Add Case
          </button>
          <div className="search-bar d-flex align-items-center rounded-pill">
            <span className="input-group-append">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#502bc7" }}
              />
            </span>
            <input
              type="text"
              placeholder="Search..."
              name="search"
              style={{ borderColor: "#502cb7" }}
              className="p-2 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
