import React from 'react'
import { Link } from 'react-router-dom'


import Article1 from "./img/Article 1.png";
import Article2 from "./img/Article 2.png";
import Article3 from "./img/Article 3.png";
import textArticle from "./img/textArticle.svg";
import CarouselItemArticles from "./components/carousel_item_articles"

import './table.css';

const Table = ({ table }) => (
  <>
    
    <div className="container p-md-5">
      <div className="row g-5">
        <div className="col-md-6">
          <section className="carousel-articles pb-5">
              <div id="centie_carousel_articles" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{height:'60vh', display: 'grid', placeItems: 'center', backgroundColor:'#f4f4f4'}}>
                  <div className="carousel-indicators">
                      <button type="button" data-bs-target="#centie_carousel_articles" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#centie_carousel_articles" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#centie_carousel_articles" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                      <CarouselItemArticles />
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#centie_carousel_articles" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                  </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#centie_carousel_articles" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                  </button>
              </div>
          </section>
        </div>
        <div className="col-md-6">
          {/* <div className="container"> */}
            <div className="row g-5">
            <div className="col-md-6">
              <img src={Article1} alt="Memorandum of understanding" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <img src={Article3} alt="Earth month" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <img src={Article2} alt="Memorandum of understanding" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <img src={Article3} alt="Earth month" className="img-fluid" />
            </div>
            </div>
          {/* </div> */}
        </div>
        
      </div>
    </div>
    <div className="text-center p-5">
      <button className="btn text-light" style={{backgroundColor: "blue"}}><Link to='/article' className="text-decoration-none text-light">View more articles</Link></button>
    </div>
    {/* <div className="container d-flex justify-content-center p-md-5">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6 d-flex align-items-center">
            <h1 className="pt-3">Featured Articles</h1>
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
    </div> */}
  </>
);

export default Table;

// IT’S Women’s Month! Let us celebrate Women!
