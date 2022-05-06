import './Footer.css'

import { Link } from 'react-router-dom'
import Exhibit from './components/exhibit'
import Home from './components/home'
import Innovator from './components/innovator'
import About from './components/about'
import Articles from './components/articles'
import Product from './components/product'
import Labs from './components/labs'
import Connect from './components/connect'
import NUWAVE from './img/logo.png'
import wizard from './img/wizard.png'
import nuLogo from './img/nu_logo.png'
const Footer = () => (
  <div className="Footer container-fluid px-0">
    <div className="d-md-flex border border-2 border-bottom">
      <div style={{width: 'fit-content', height: 'fit-content'}} className="mx-auto">
        <img src={NUWAVE} alt="nu wave" className="img-fluid"/>
      </div>
      <div className='row gy-5 pt-md-5'>
        
        <div className='col-md-3'>
          <Home />
        </div>
        <div className='col-md-3'>
          <Exhibit />
        </div>
        <div className='col-md-3'>
          <Innovator />
        </div>
        <div className="col-md-3">
          <About />
        </div>
        <div className='col-md-3'>
          <Articles />
        </div>
        <div className='col-md-3'>
          <Product />
        </div>
        <div className='col-md-3'>
          <Labs />
        </div>
        <div className="col-md-3">
          <Connect />
        </div>
      </div>
    </div>
   
   <div className="container-fluid d-md-flex justify-content-evenly credits">
     <div className="container p-5">
       <div className="row">
         <div className="col-md-6 text-center text-md-end">
          <img src={wizard} alt="..." className="img-fluid"/>
         </div>
         <div className="col-md-6 text-center text-md-start">
          <span className=''>NU WIZARDS CIRCLE WEB DEV</span>
         </div>
       </div>
     </div>
     <div className="container p-5">
       <div className="row">
         <div className="col-md-6 text-center text-md-end">
         <span className=''>Copyright and Disclaimer</span>
         </div>
         <div className="col-md-6 text-center text-md-start">
          <img src={nuLogo} alt="..." className="img-fluid"/>
         </div>
       </div>
     </div>
   </div>
    {/* <div className="row gy-3 pt-5 text-center">
      <div className="col-md-4 d-flex">
        <img src={wizard} alt="..." className="img-fluid"/>
        <span className=''>NU WIZARDS CIRCLE WEB DEV</span>
      </div>
      <div className="col-md-4">
        <span className=''>National University - Manila</span>
      </div>
      <div className="col-md-4">
        <Link to='' className='text-dark'>Copyright and Disclaimer</Link>
      </div>
    </div> */}
  </div>
)

export default Footer
