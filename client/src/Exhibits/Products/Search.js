import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Search.css'

const Search = () => (
  <div className='Search'>
    <section>
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <div className="container text-start px-5 py-3" id="myDescriptionOfExhibit"></div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="search-container py-3 px-5-md">
            <div className="row d-flex justify-content-end align-items-right">
                <div className="col-lg-6 col-md-12">
                    <div className="search"> 
                        <i className="bi bi-search"></i> 
                        <input type="text" className="form-control"  data-bs-toggle="tooltip" data-bs-placement="top" title="Disabled for now" disabled /> 
                        <button className="btn" disabled>Search</button> 
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Search