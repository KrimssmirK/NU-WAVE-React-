import { Link } from "react-router-dom";
import "../Footer.css";

const QuickLinks = () => (
  <div className="QuickLinks">
    <div className="d-flex justify-content-center">
      <div>
      <div className="title">
          <h1 className="h5" style={{ color: "black" }}>
            Exhibit
          </h1>
        </div>
        <div className="content px-3">
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="#" style={{ color: "black", textDecoration: "none" }}>
                Recent
              </Link>
            </li>
            <li>
              <Link to="#" style={{ color: "black", textDecoration: "none" }}>
                Upcoming
              </Link>
            </li>
            <li>
              <Link to="#" style={{ color: "black", textDecoration: "none" }}>
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default QuickLinks;
