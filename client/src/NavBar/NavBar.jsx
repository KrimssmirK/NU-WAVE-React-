import { Component } from 'react'
import './NavBar.css'
import logo from './img/new-Logo.png'
import { NavLink, Link } from 'react-router-dom'
import account_bg from './img/account-bg.png';
import wave from './img/New_Wave.svg'
class NavBar extends Component {
  
  handleClickSignInSignUpCart = () => {
    alert('The feature will be available soon')
  }
  
  render() {
    // const cartColor = { color: '#35408E' }
    return (
      <div className="Navbar container-fluid px-0 pb-5">
        <nav className="navbar navbar-expand-lg navbar-light navbar-fixed fixed-top">
            <div className="container-fluid px-0 px-md-5">
              <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className='mx-auto'>
                  <img src={logo} alt='logo' className="wave-logo img-fluid"/>
              </div>
              <div className="collapse navbar-collapse ps-3" id="navbarNav">
                
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <NavLink className={({isActive}) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink 
                      className={({isActive}) => (isActive ? "nav-link active dropdown-toggle" : "nav-link dropdown-toggle")} 
                      id="navbarDropdown" 
                      role="button" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false" 
                      to="/about">
                      Articles
                    </NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><NavLink className={({isActive}) => (isActive ? "dropdown-item bg-light active" : "dropdown-item bg-light")} to="/article">All articles</NavLink></li>
                      <li><NavLink className={({isActive}) => (isActive ? "dropdown-item bg-light active" : "dropdown-item bg-light")} to="/">Featured</NavLink></li>
                      <li><NavLink className={({isActive}) => (isActive ? "dropdown-item bg-light active" : "dropdown-item bg-light")} to="/">Latest</NavLink></li>
                    </ul>
                  </li>
                  
                  <li className="nav-item dropdown">
                    <NavLink 
                      className={({isActive}) => (isActive ? "nav-link active dropdown-toggle" : "nav-link dropdown-toggle")} 
                      id="navbarDropdown" 
                      role="button" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false" 
                      to="/about">
                     Exhibit
                    </NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><NavLink className={({isActive}) => (isActive ? "dropdown-item bg-light active" : "dropdown-item bg-light")} to="/exhibits">All exhibit</NavLink></li>
                      <li><NavLink className={({isActive}) => (isActive ? "dropdown-item bg-light active" : "dropdown-item bg-light")} to="/">Recent</NavLink></li>
                      <li><NavLink className={({isActive}) => (isActive ? "dropdown-item bg-light active" : "dropdown-item bg-light")} to="/">Upcoming</NavLink></li>
                      <li><NavLink className={({isActive}) => (isActive ? "dropdown-item bg-light active" : "dropdown-item bg-light")} to="/">Gallery</NavLink></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink 
                      className={({isActive}) => (isActive ? "nav-link active dropdown-toggle" : "nav-link dropdown-toggle")} 
                      id="navbarDropdown" 
                      role="button" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false" 
                      to="/innovators">
                     Innovators
                    </NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><NavLink className={({isActive}) => (isActive ? "dropdown-item bg-light active" : "dropdown-item bg-light")} to="/">Featured</NavLink></li>
                      <li><NavLink className={({isActive}) => (isActive ? "dropdown-item bg-light active" : "dropdown-item bg-light")} to="/">Newest</NavLink></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink 
                      className={({isActive}) => (isActive ? "nav-link active dropdown-toggle" : "nav-link dropdown-toggle")} 
                      id="navbarDropdown" 
                      role="button" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false" 
                      to="/products">
                      Products
                    </NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><NavLink className={({isActive}) => (isActive ? "dropdown-item bg-light active" : "dropdown-item bg-light")} to="/">Categories</NavLink></li>
                      <li><NavLink className={({isActive}) => (isActive ? "dropdown-item bg-light active" : "dropdown-item bg-light")} to="/">New</NavLink></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}to="/contact">Contact</NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink 
                      className={({isActive}) => (isActive ? "nav-link active dropdown-toggle" : "nav-link dropdown-toggle")} 
                      id="navbarDropdown" 
                      role="button" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false" 
                      to="/labs">
                     Labs
                    </NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><NavLink className={({isActive}) => (isActive ? "dropdown-item bg-light active" : "dropdown-item bg-light")} to="/">Innovaiton</NavLink></li>
                      <li><NavLink className={({isActive}) => (isActive ? "dropdown-item bg-light active" : "dropdown-item bg-light")} to="/">Incubation</NavLink></li>
                    </ul>
                  </li>
                </ul>
                <div className="signIn d-flex" style={{color: 'black'}}>
                  {/* <button className="btn rounded-pill border-white text-light" style={{color: 'black', zIndex: 1}}>Sign up</button> */}
                  <div className="pe-2 py-2 text-dark">
                    <i className="bi bi-bag pe-2"></i>
                    <span>0</span>
                  </div>
                  
                  {/* <Link to="#" className="text-decoration-none" style={{color: 'black', zIndex: 1}}> */}
                    <button className="btn text-light" style={{backgroundColor: "blue"}}>Sign in</button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </nav>
      </div>
      // <div className ="Navbar container-fluid">
      //   <nav className = "navbar navbar-expand-lg navbar-dark py-0">
      //     <Link to='/' className='navbar-brand me-0'>
      //       <div className='container'>
      //         <div className='row'>
      //           <div className='col-3 ps-0'>
      //             <div className='n-logo'>
      //               <img src={logo} alt='logo' />
      //             </div>
      //           </div>
      //           <div className='col-8 nu-title px-md-0 pt-2'>
      //             <div className='nav-title fs-6 '>NU WAVE<br/></div>
      //             <div className='nav-sub fs-6'>Creative &#38; Technology Hub</div>
      //           </div>
      //         </div>
      //       </div>  
      //     </Link>
                        
    
      //     <button 
      //       className="navbar navbar-toggler navbar-dark" 
      //       type="button" 
      //       data-bs-toggle="collapse" 
      //       data-bs-target="#toggleMobileMenu" 
      //       aria-controls="toggleMobileMenu" 
      //       aria-expanded="false" 
      //       aria-label="Toggle Navigation">
      //         <span className="navbar-toggler-icon"></span>
      //     </button>
      //     <div className = "collapse navbar-collapse" id = "toggleMobileMenu">
      //       <div className='container'>
      //         <div className='row'>
      //           <div className='col-md-9 px-0 mx-0'>
      //             <div className='d-lg-flex justify-content-center'>
      //               <ul className = "navbar-nav">
      //                 <li>
      //                   <Link
      //                    className='nav-link text-white mx-3'
      //                    to='/'
      //                   >
      //                     Home
      //                   </Link>
      //                 </li>
      //                 <li>
      //                   <Link
      //                    className='nav-link text-white mx-3'
      //                    to='/exhibits'
      //                   >
      //                     Exhibits
      //                   </Link>
      //                 </li>
      //                 <li>
      //                   <Link
      //                    className='nav-link text-white mx-3'
      //                    to='/gallery'
      //                   >
      //                     Gallery
      //                   </Link>
      //                 </li>
      //                 <li>
      //                   <Link
      //                    className='nav-link text-white mx-3'
      //                    to='/about'
      //                   >
      //                     About
      //                   </Link>
      //                 </li>
      //                 <li>
      //                   <Link
      //                    className='nav-link text-white mx-3'
      //                    to='/contact'
      //                   >
      //                     Contact
      //                   </Link>
      //                 </li>
      //               </ul>
      //             </div> 
      //           </div>
      //           <div className='col-md-3 px-0 mx-0'>
      //             <div className='float-md-end'>
      //               <ul className = "navbar-nav mx-3" onClick={this.handleClickSignInSignUpCart}>
      //                 <div className='vl'>
      //                   <li
      //                     data-bs-toggle="tooltip"
      //                     data-bs-placement="top"
      //                     title= "Disabled for now">
      //                     <NavLink className = "nav-link text-white disabled" href = "">SIGN UP</NavLink>
      //                   </li>
      //                 </div>
      //                 <li
      //                   data-bs-toggle="tooltip"
      //                   data-bs-placement="top"
      //                   title= "Disabled for now">
      //                   <NavLink className = "nav-link text-white disabled" href = "">SIGN IN</NavLink>
      //                 </li>
      //                 <li
      //                   data-bs-toggle="tooltip"
      //                   data-bs-placement="top"
      //                   title= "Disabled for now">
      //                   <NavLink className = "nav-link text-white disabled" href = "">
      //                   <i className="bi bi-cart3 b-cart-icon" style={cartColor}></i>
      //                   </NavLink>
      //                 </li>
      //               </ul>
      //             </div>
      //           </div>
      //         </div>
      //       </div> 
      //     </div>
      //   </nav>
      // </div>
    )
  }  
}

export default NavBar