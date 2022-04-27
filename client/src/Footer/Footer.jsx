import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Footer.css'
import nuLogo from './img/nu-logo.png'
import { Link } from 'react-router-dom'

const Footer = () => (
    <div className="Footer">
      <div className='main-container px-md-5 py-md-5'>
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
              
          </div>
      
      </div>
        <div className='container-fluid copy-width bg-light'>
            <div className="footer-copy myCopyright text-center">
                COPYRIGHT&copy; @CENTIE INNOVATION HUB
            </div>
        </div>
    </div>
)

const Contact = () => (
  <div className='px-5 text-light'>
    <span className="lead fw-bold">Contact</span>
    <p>
      National University
      Center for Innovation and Entrepreneurship
      551 M.F. Jhocson St. Sampaloc, Manila, PH 1008
    </p>
    <i className="bi bi-telephone-fill text-light"></i><span> +632 8712-1900</span>
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

// const Top = () => (
//     <div className="px-3 text-end socials">
//     <Link href="#" className="">
//         <i className="bi bi-arrow-up-circle h3"></i>
//     </Link>
// </div>
// )


export default Footer