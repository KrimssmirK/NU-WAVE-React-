import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Footer.css'
import nuLogo from './img/nu-logo.png'
import { Link } from 'react-router-dom'

const Footer = () => (
    <div>
    <div className='main-container px-md-3 py-md-5'>
        <div className='container inner-container'>
            <div className='row px-3'>
                <div className='col-lg-5 col-md-5'>
                    <Content/>
                </div>
                <div className='col-lg-4 col-md-3'>
                    <Nav/>
                </div>
                <div className='col-lg-2 col-md-3'>
                    <h6 className="mx-3 mt-2 footer-text myTitle d-md-flex justify-content-end socials">FOLLOW US!</h6>
                    <SocialMedia/>
                </div>
                <div className='col-lg-1 col-md-1'>
                    <Top/>
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

const Content = () => (
<div className='mt-3'>
                <span className="d-block myDetail fs-3 text-light logo-footer">
                    <img src={nuLogo}/>
                </span>
                <span className="d-block myDetail">By National University</span>
            </div>
)

const Nav = () => (
<div className="container py-0 footer-nav">
                <h6 className="footer-text myTitle">CONTENTS</h6>
                  <ul className="px-0">
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

const SocialMedia = () => (
    <div className="container px-3 d-md-flex justify-content-end socials">
    <a href="https://facebook.com/NUCentIE"><i className="bi bi-facebook"></i></a>
    </div>
)

const Top = () => (
    <div className="px-3 text-end socials">
    <a href="#" className="">
        <i className="bi bi-arrow-up-circle h3"></i>
    </a>
</div>
)


export default Footer