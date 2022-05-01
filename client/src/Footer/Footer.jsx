import './Footer.css'

import { Link } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import QuickLinks from './components/QuickLinks'

import NUWAVE from './img/NUWAVE.png'

const Footer = () => (
  <div className="Footer ">
    <div className='container d-flex align-items-center'>
    <div className='row' style={{marginTop: 12 + '%'}}>
      <div className='col-2'>
        <img src={NUWAVE} style={{width: 130+ '%'}}/>
      </div>
      <div className='col-4'>
        <QuickLinks />
      </div>
      <div className='col-2'>
      <h1 className='h5' style={{fontFamily:'Futura', color: 'white'}}>Contact Us</h1>
      </div>
      <div className='col-4'>
      <h1 className='h5' style={{fontFamily:'Futura', color: 'white'}}>SignUp with our NewLetter</h1>
      </div>
    </div>
    </div>
  </div>
)

export default Footer
