import React from 'react'
import './About.css'
import photo1 from './img/photo1.png'
import photo4 from './img/photo4.png'


const About = () => (
    <div className='About'>
        <section id="centie-info" className="p-md-5 my-5">
    <div className="container">
      <div className="p-5">
        <h2 className="text-center fs-1">NU Center for Innovation and Entrepreneurship</h2> 
        <hr />
      </div>
      <div className="row p-md-5 my-5">
        <div className="col-md my-auto">
          <div className="p-5">
            <h2 className="text-center fs-1">Mission</h2> 
            <hr />
          </div>
          <p className="text-justify">
            The Center for Innovation and Entrepreneurship promotes innovation and entrepreneurship 
            across the NU community by uplifting the strength in multidisciplinary field. 

          </p> 
        </div>
        <div className="col-md">
          <img src={photo1} alt="" className="img-fluid p-3 mx-auto d-block" id="photo1" />
        </div>
      </div>
      <div className="row p-md-5">
        <div className="col-md">
          <img src={photo4} alt="" className="img-fluid p-5 mx-auto d-block" id="photo2" />
        </div>
        <div className="col-md my-auto">
          <div className="p-5">
            <h2 className="text-center fs-1">Vision</h2> 
            <hr />
          </div>
          <p className="text-justify lh-lg">
            The Center for Innovation and Entrepreneurship envisioned to be an inclusive, realistic, and collaborative community achieving all its strategic objectives. <br />
            The Center for Innovation and Entrepreneurship is the vehicle of National University in the creation of a Leading Innovation Culture within the University, wherein creative individuals in an organization are motivated not only to achieve their fullest potential as individuals, but to do so in a way that creates wealth and value for all stakeholders Ultimately, the Center will facilitate the innovation process of bringing the idea to market.
            <br />
            The Center will address various local and global challenges and thus shall play a vital role in aligning its programs to the Philippine Development Plan, Executive Order No.5 Ambisyon Natin 2040, Philippine Industry Roadmap, United Nation’s Sustainable Development Goals (SGD) and Industry 4.0.   
            NU must be competitive and at par with the innovation initiatives of other Higher Education Institution.  The Center will employ and adhere to existing laws in order to effectively manage resources, human capital and knowledge generation and transfer.

          </p> 
        </div>
      </div>
    </div>
  </section>
    </div>
    
)

export default About