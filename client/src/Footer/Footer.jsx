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


const Nav = () => (
  <div className="container py-0 footer-nav">
    <div className="ms-md-5 ps-md-5">
      <h6 className="footer-text text-light fw-bold">Menu</h6>
    </div>
        <ul className="px-0 mx-auto" style={{width: 'fit-content'}}>
              <li>
                <Link to='/'>
                  HOME
                </Link>
              </li>
              <li>
                <Link to='/exhibits'>
                EXHIBIT
                </Link>
              </li>
              <li>
                <Link to='/gallery'>
                  GALLERY
                </Link>
              </li>
              <li>
                <Link to='/about'>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to='/contact'>
                  CONTACT
                </Link>
              </li>
        </ul>
  </div>
)

const Newsletter = () => (
    <div className="container px-0 py-3 socials">
      <Link to="https://facebook.com/NUCentIE"><i className="bi bi-facebook"></i></Link>
    </div>
)



export default Footer

{/* <div className='main-container px-md-5 py-md-5'>
          <div className='container inner-container'>
              <div className='row px-5'>
                  <div className='col-md-4'>
                      <Contact/>
                  </div>
                  <div className='col-md-4'>
                      <Nav/>
                  </div>
                  <div className='col-md-4'>
                      <h6 className="fw-bold  text-light">Newsletter</h6>
                      <div class="row g-3 align-items-center">
                          
                          <div class="col-auto pe-0">
                            <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
                          </div>
                          <div class="col-auto ps-0">
                            <button for="inputPassword6" class="col-form-label btn text-warning border border-dark">Sign in</button>
                          </div>
                        </div>
                      <Newsletter/>
                  </div>
                
              </div>
              
          </div> */}