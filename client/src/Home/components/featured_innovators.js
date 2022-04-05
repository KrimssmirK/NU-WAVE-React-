import React from 'react'

import innovator from '../img/article4.png'

import Articles from './articles'

export default function FeaturedInnovator() {
  return (
    <>  
    {/* TODO: for now, col-md-6. But it should be col-md-4 */}
      
      <div className="col-md-6">
        <div className="text-center mb-5">
            <span className="fs-1 border-warning border-2 border-bottom">Featured Innovator</span>
        </div>
        <div className="card innovator-card">
          <div className="text-center pt-3">
            <img src={innovator} alt="Dr. Ria Canlas" className="img-fluid img-thumbnail w-50"/>
          </div>
            <div className="card-body">
              <div className="text-center">Dr. Ria Canlas</div>
              <p className="mt-3 innovator-description">
                Dr. Ria Canlas is National University’s very own Director of Center for Innovation and Entrepreneurship. 
                She is currently the CEO of Po Lite Technology Inc., a local manufacturing company that formulates and designs 
                construction materials using green innovation and technology to contribute to nation-building. In 2020, she was 
                the grand winner of the Alfredo M. Yao Intellectual Property Awards for her intellectual property called 
                “An Eco-Couture Panel System and a Method of Manufacture of Prefabricated Building Materials”
              </p>
            </div>
        </div>
      </div>
      <Articles />
    </>
  )
}
