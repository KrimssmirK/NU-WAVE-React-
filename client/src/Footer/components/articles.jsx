import { Link } from "react-router-dom";
import "../Footer.css";
import Latest from '../../Article/Item'

const QuickLinks = () => (
  <div className="QuickLinks">
    <div className="d-flex justify-content-center">
      <div>
        <div className="title">
          <h6>
            Articles
          </h6>
        </div>
        <div className="content px-3">
          <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
              <Link to="/article" style={{ color: "black", textDecoration: "none" }} onClick={() => window.scrollTo(0, 0)}>
                All articles
              </Link>
            </li>
            <li>
              <Link to="/Coming_Soon" style={{ color: "black", textDecoration: "none" }}>
                Latest
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
