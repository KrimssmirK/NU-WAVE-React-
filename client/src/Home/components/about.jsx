import React from 'react'
import about_bg from '../img/bgwave.svg'
import logo from '../img/LOGO_WAVE_NEW.svg'
function about() {
  return (
    <div className="container-fluid px-0">
       {/* <div className="about-us bg-secondary"> */}
        {/* <img src={about_bg} alt="" className="bg-about"/> */}
           {/* <div className=" px-0"> */}
               <div className="row about-us">
                   <div className="col-md-6 px-0">
                       <div className=" p-5">
                            <h5 className="text-center text-light about-title">About us</h5>
                            <p className="p-5 text-center text-light">
                                The Center for Innovation and Entrepreneurship 
                                envisioned to be an inclusive, realistic, 
                                and collaborative community achieving all its strategic objectives.
                            </p>
                       </div>
                   </div>
                   <div className="col-md-6 px-0">
                       <div className="text-center p-5">
                            <img src={logo} alt="logo" className="logo-about"/>
                       </div>
                   </div>
               </div>
           {/* </div> */}
       {/* </div> */}
    </div>
  )
}

export default about