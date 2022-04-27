import React from 'react'
import { Link } from 'react-router-dom'


import innovator from '../img/article4.png'

import Articles from './articles'
import article1 from '../img/article1.png'
import article2 from '../img/article2.png'

export default function FeaturedInnovator() {
  return (
    <>  
    {/* TODO: for now, col-md-6. But it should be col-md-4 */}
      
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="container">
              <img src={article1} alt="general" className="img-fluid"/>

            </div>
          </div>
          <div className="col-md-6">
            <div className="me-5 pe-sm-5">
              <span>2020.4.22</span>
              <h6>1st TouchDown Meeting for Creative and Technology Innovation Hub Incubatees</h6>
              <p>
                Thanks to all who joined us in this fruitful and engaging meeting with CentIE Director Dr. Ria Liza Centeno - Canlas   
                To our Incubatees, Mentors, Core Members, Faculty, and Collaborators, Thank you all and see you at our next activity...
                THE END IS JUST THE START
                #CentIE #Startup #Innovation #Entreprenurship #TheEndisJusttheStart
                #EntrepreNUr #EducationThatWorks 
              </p>
            </div>
            
          </div>
        </div>
        <div className="row p-3">
          <div className="col-md-6">
            <div className="row g-3">
              <div className="col-6">
                <div className="container text-end">
                  <img src={article2} alt="article2" className="img-fluid img-articles"/>
                </div>
              </div>
              <div className="col-6">
                <p>
                  <Link to=''>5 REASONS TO START A STARTUP TODAY!!!</Link>
                </p>
              </div>
              <div className="col-6">
                <div className="container text-end">
                  <img src={article2} alt="article2" className="img-fluid img-articles"/>
                </div>
              </div>
              <div className="col-6">
                <p>
                  <Link to=''>5 REASONS TO START A STARTUP TODAY!!!</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="row g-3">
              <div className="col-2">
                <div className="container">
                  <img src={article2} alt="article2" className="img-fluid img-articles"/>
                </div>
              </div>
              <div className="col-10">
                <p>
                  <Link to=''>5 REASONS TO START A STARTUP TODAY!!!</Link>
                </p>
              </div>
              <div className="col-2">
                <div className="container">
                  <img src={article2} alt="article2" className="img-fluid img-articles"/>
                </div>
              </div>
              <div className="col-10">
                <p>
                  <Link to=''>5 REASONS TO START A STARTUP TODAY!!!</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  )
}
