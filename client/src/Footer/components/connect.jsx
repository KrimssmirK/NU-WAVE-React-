import { Link } from "react-router-dom";
import "../Footer.css";

const QuickLinks = () => (
  <div className="QuickLinks">
    <div className="d-flex justify-content-center">
      <div>
        <div className="title">
          <h1 className="h5" style={{ color: "black" }}>
            Connect
          </h1>
        </div>
        <div className="content d-flex justify-content-around px-3">
          <i className="bi bi-facebook text-primary px-1"></i>
          <i className="bi bi-messenger px-1" style={{color: "purple"}}></i>
          <i className="bi bi-youtube px-1 text-danger"></i>
          <i className="bi bi-envelope-fill px-1 text-warning"></i>
        </div>
      </div>
    </div>
  </div>
);

export default QuickLinks;
