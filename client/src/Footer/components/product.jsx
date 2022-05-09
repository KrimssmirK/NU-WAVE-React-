import { Link } from "react-router-dom";
import "../Footer.css";

const QuickLinks = () => (
  <div className="QuickLinks">
    <div className="d-flex justify-content-center">
      <div>
        <div className="title">
          <h6>
            Products
          </h6>
        </div>
        <div className="content px-3">
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/Coming_Soon" style={{ color: "black", textDecoration: "none" }}>
                Categories
              </Link>
            </li>
            <li>
              <Link to="/Coming_Soon" style={{ color: "black", textDecoration: "none" }}>
                New
              </Link>
            </li>
            <li>
              <Link to="/Coming_Soon" style={{ color: "black", textDecoration: "none" }}>
                Featured
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default QuickLinks;
