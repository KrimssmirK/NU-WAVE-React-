import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Gallery.css'
import temporary from './img/temporary.jpg'
import temporary2 from './img/temporary2.jpg'

const Gallery = () => (
    <div className='Gallery'>
        <section class="pb-5">
    <div className="container-fluid px-0 gallery-banner bg-dark">
      <div className="row">
        <div className="banner-text-col col">
          <div className="banner-text mx-lg-5 px-5">
            <h1>Gallery</h1>
        </div>
      </div>        
      </div>
    </div>
  </section>   
  <section className="p-md-3">

    <div className="container">
      <div className="row justify-content-around gx-5">
        <div className="col-lg-6"> 
          <a href="./Product_Poster/html/Page1.html">
            <div className="mb-5 py-3 shadow text-center">
              <img className = "poster img-fluid" src={temporary} alt='Poster-Image'/>
              <h3 className = "poster-title py-3">
              Product Poster
              </h3>       
            </div>       
          </a>           
        </div>
        <div className="col-lg-6">    
          <a href="./Journal_Poster/html/journal_poster.html">
            <div className="mb-5 py-3 shadow text-center">
              <img className = "poster img-fluid" src={temporary2} alt='Poster-Image'/>
              <h3 className = "poster-title py-3">
                Journal Poster
              </h3>    
            </div>  
          </a>        
        </div>      
      </div>
    </div>
  </section>
    </div>
    
)

export default Gallery