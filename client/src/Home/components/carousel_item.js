import React from 'react'
import banner1 from '../img/banner1.png'
import banner2 from '../img/banner2.png'
import banner3 from '../img/banner3.png'

export default function CarouselItem() {
  return (
    <>
        <div className="carousel-item active">
            <img src={banner1} className="img-fluid" alt="Centie Banner"/>
        </div>
        <div className="carousel-item">
            <img src={banner2} className="img-fluid" alt="Centie Banner"/>
        </div>
        <div className="carousel-item">
            <img src={banner3} className="img-fluid" alt="Centie Banner"/>
        </div>
    </>
  )
}
