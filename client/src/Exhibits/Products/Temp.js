import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Temp.css'

const Temp = ({ children }) => (
  <div className='Temp'>
     <section className="p-2">
      <div className="d-block d-sm-none text-center">
        <div className="filter">
          <button 
          className="btn btn-default" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#mobile-filter" 
          aria-expanded="false" 
          aria-controls="mobile-filter">
          Search filter<span className="bi bi-funnel-fill pl-1 text-primary"></span>
        </button>
        </div>
        <div className="collapse" id="mobile-filter">
          <div className="filter-col col-lg-2 mx-auto d-block" style={{width: 'fit-content', height: 'fit-content'}}>
            
            <label className="fw-bold text-start mr-5">Catergory</label>
            <div className="px-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" disabled/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Food
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" disabled/>
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Gadget
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" disabled/>
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Art
                </label>
              </div>
            </div>
            
          
            <div className="mt-2">
              <span className="fw-bold">Ratings</span>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" disabled/>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    5 stars
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" disabled/>
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    4 stars
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" disabled/>
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    3 stars
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" disabled/>
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    2 stars
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" disabled/>
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    1 star
                  </label>
                </div>
         
            </div>
            <div>
              <label htmlFor="priceRange" className="form-label fw-bold mt-2">Price range</label>
              <span htmlFor="price" className="form-label"><br/>&#8369; 0<br/></span>
              <input type="range" className="form-range mx-0" id="priceRange"disabled/>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gx-5">
            <div 
            className="filter-col col-lg-2 d-none d-sm-block p-0" 
            style={{width: 'fit-content', height: 'fit-content'}}
            data-bs-toggle="tooltip" data-bs-placement="top" title="Disabled for now">
              <i className="bi bi-funnel"></i>
              <span className="fw-bold">Search Filter</span>
              <hr className="filter-line" size="4"/>
              
              <span className="fw-bold">Catergory</span>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" disabled/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Food
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" disabled/>
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Gadget
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" disabled/>
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Art
                </label>
              </div>
            
              <div className="mt-2">
                <span className="fw-bold">Ratings</span>
           
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" disabled/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      5 stars
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" disabled/>
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                      4 stars
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" disabled/>
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                      3 stars
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" disabled/>
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                      2 stars
                    </label>
                  </div>
                  <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" disabled/>
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                      1 star
                    </label>
                  </div>
              </div>
              
              <div className="px-0 mx-0" style={{width: 130}}>
                <label htmlFor="priceRange-lg" className="form-label fw-bold mt-2 mx-0">Price range</label>
                <span htmlFor="price-lg" className="form-label"><br/>&#8369; 0<br/></span>
                <input type="range" className="form-range mx-0" id="priceRange-lg" style={{width: 60 + '%'}} disabled/>
              </div>
              
            
              
            </div>
           
          
          <div className="col-md-12 col-lg-10">
            {children}
          </div>
        </div>
      </div>
    </section>
    
  </div>
)

export default Temp
