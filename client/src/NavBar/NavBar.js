import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './NavBar.css'
import logo from './img/logo.png'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  
  handleClickSignInSignUpCart = () => {
    alert('The feature will be available soon')
  }
  
  render() {
    const cartColor = { color: '#35408E' }
    return (
      <div className ="container-fluid">
        <nav className = "navbar navbar-expand-lg navbar-dark py-0">
          <a href = "/index.html"  className ="navbar-brand me-0">
            <div className='container'>
              <div className='row'>
                <div className='col-3 ps-0'>
                  <div className='n-logo'>
                    <img src={logo} alt='logo' />
                  </div>
                </div>
                <div className='col-8 nu-title px-md-0 pt-2'>
                  <div className='nav-title fs-6 '>NU WAVE<br/></div>
                  <div className='nav-sub fs-6'>Creative &#38; Technology Hub</div>
                </div>
              </div>
            </div>              
          </a>  
          <button 
            className="navbar navbar-toggler navbar-dark" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#toggleMobileMenu" 
            aria-controls="toggleMobileMenu" 
            aria-expanded="false" 
            aria-label="Toggle Navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className = "collapse navbar-collapse" id = "toggleMobileMenu">
            <div className='container'>
              <div className='row'>
                <div className='col-md-9 px-0 mx-0'>
                  <div className='d-lg-flex justify-content-center'>
                    <ul className = "navbar-nav">
                      <li>
                        <Link
                         className='nav-link text-white mx-3'
                         to='/'
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                         className='nav-link text-white mx-3'
                         to='/exhibits'
                        >
                          Exhibits
                        </Link>
                      </li>
                      <li>
                        <Link
                         className='nav-link text-white mx-3'
                         to='/gallery'
                        >
                          Gallery
                        </Link>
                      </li>
                      <li>
                        <Link
                         className='nav-link text-white mx-3'
                         to='/about'
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                         className='nav-link text-white mx-3'
                         to='/contact'
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div> 
                </div>
                <div className='col-md-3 px-0 mx-0'>
                  <div className='float-md-end'>
                    <ul className = "navbar-nav mx-3" onClick={this.handleClickSignInSignUpCart}>
                      <div className='vl'>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title= "Disabled for now">
                          <a className = "nav-link text-white disabled" href = "">SIGN UP</a>
                        </li>
                      </div>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title= "Disabled for now">
                        <a className = "nav-link text-white disabled" href = "">SIGN IN</a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title= "Disabled for now">
                        <a className = "nav-link text-white disabled" href = "">
                        <i className="bi bi-cart3 b-cart-icon" style={cartColor}></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </nav>
      </div>
    )
  }  
}

export default NavBar