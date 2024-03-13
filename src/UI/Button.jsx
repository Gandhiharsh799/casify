import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({ label, type, onClick, icon }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="btn btn-lg btnn rounded-pill m-3 fs-6"
      style={{ backgroundColor: "#502cb7", color: "white", }}
    >
      {icon && <FontAwesomeIcon icon={icon} className="px-1" />}
      {label}
    </button>
  );
}
