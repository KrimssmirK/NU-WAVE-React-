import Article1 from "./img/Article 1.png";
import Article2 from "./img/Article 2.png";
import Article3 from "./img/Article 3.png";
import textArticle from "./img/textArticle.svg";

import "./table.css";

const Table = ({ table }) => (
  <>
    {/**TWO COLUMNS */}
    <div className="container d-flex justify-content-center p-5">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6 d-flex align-items-center">
            <h1>Featured Articles</h1>
          </div>
          
          <div className="col-lg-6 d-flex align-items-center carousel-lead">
            <div className="container-fluid carousel-cont px-0">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={Article1} className="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={Article2} className="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={Article3} className="d-block w-100" alt="..." />
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Table;

// IT’S Women’s Month! Let us celebrate Women!
