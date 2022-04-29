import './Footer.css'

import { Link } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import QuickLinks from './components/QuickLinks'

const Footer = () => (
  <div className="Footer">
    <div className='row justify-content-around"'>
      <div className='col-4'>
        <About />
      </div>
      <div className='col-4'>
        <QuickLinks />
      </div>
      <div className='col-4'>
        <Contact />
      </div>
    </div>
  </div>
)

export default Footer
