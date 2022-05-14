import React from 'react'
import Article1 from "../img/Article 1.png";
import Article2 from "../img/Article 2.png";
import Article3 from "../img/Article 3.png";

export default function CarouselItem() {
  return (
    <>
        <div className="carousel-item active">
            <img src={Article1} className="img-fluid" alt="Centie Article" />
        </div>
        <div className="carousel-item">
            <img src={Article2} className="img-fluid" alt="Centie Article" />
        </div>
        <div className="carousel-item">
            <img src={Article3} className="img-fluid" alt="Centie Article" />
        </div>
    </>
  )
}
