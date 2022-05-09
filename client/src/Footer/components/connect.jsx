import { Link } from "react-router-dom";
import "../Footer.css";

const QuickLinks = () => (
  <div className="QuickLinks">
    <div className="d-flex justify-content-center">
      <div>
        <div className="title">
          <h6>
            Connect
          </h6>
        </div>
        <div className="content px-3">
          <a href="https://facebook.com/NUCentIE" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook text-primary px-1"></i>   
          </a>
          <a className="fb-messenger" href="https://m.me/NUCentIE" target='_blank' rel="noopener noreferrer">
            <i className="bi bi-messenger px-1" style={{color: "purple"}}></i>
          </a>
          <i className="bi bi-youtube px-1 text-danger"></i>
          <i className="bi bi-envelope-fill px-1 text-warning"></i>
        </div>
      </div>
    </div>
  </div>
);

export default QuickLinks;
