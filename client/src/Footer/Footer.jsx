import './Footer.css'

import { Link } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import QuickLinks from './components/QuickLinks'

import NUWAVE from './img/new-Logo.png'

const Footer = () => (
  <div className="Footer p-5">
    <div className='container'>
      <div className='row gy-5'>
        <div className='col-md-2'>
          <img src={NUWAVE} alt="" className="img-fluid"/>
        </div>
        <div className='col-md-4'>
          <QuickLinks />
        </div>
        <div className='col-md-2'>
          <h1 className='h5 d-flex justify-content-center' style={{color: 'black'}}>Contact Us</h1>
          <Contact />
        </div>
        <div className='col-md-4'>
        <h1 className='h5 text-center' style={{color: 'black'}}>SignUp to our Newsletter</h1>
        </div>
      </div>
      <div className="row gy-3 pt-5 text-center">
        <div className="col-md-4">
          <span className=''>NU WIZARDS CIRCLE WEB DEV</span>
        </div>
        <div className="col-md-4">
          <span className=''>National University - Manila</span>
        </div>
        <div className="col-md-4">
          <Link to='' className='text-dark'>Copyright and Disclaimer</Link>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
