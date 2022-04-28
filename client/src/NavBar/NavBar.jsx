import { Component } from 'react'
import './NavBar.css'
import logo from './img/logo.png'
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
      <div className="Navbar container-fluid">
        <div className="account row">
        
        <nav className="navbar navbar-expand-md navbar-light" style={{ backgroundColor: 'white'}}>
            <div className="container">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <div className='wave-logo me-auto'>
                  <img src={logo} alt='logo'/>
                </div>
             
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <NavLink className={({isActive}) => (isActive ? "active" : "nav-link")} aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({isActive}) => (isActive ? "active" : "nav-link")} to="/exhibits">Exhibit</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({isActive}) => (isActive ? "active" : "nav-link")} to="/gallery">Gallery</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({isActive}) => (isActive ? "active" : "nav-link")}to="/article">Article</NavLink>
                  </li>
                  {/* <li className="nav-item">
                    <NavLink className={({isActive}) => (isActive ? "active" : "nav-link")} to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({isActive}) => (isActive ? "active" : "nav-link")}to="/contact">Contact</NavLink>
                  </li> */}
                </ul>
                <div className="signIn d-flex" style={{color: 'black'}}>
                  {/* <button className="btn rounded-pill border-white text-light" style={{color: 'black', zIndex: 1}}>Sign up</button> */}
                  <div className="pe-2 py-2">
                    <i className="bi bi-bag pe-2"></i>
                    <span>0</span>
                  </div>
                  
                  {/* <Link to="#" className="text-decoration-none" style={{color: 'black', zIndex: 1}}> */}
                    <button className="btn btn-primary">Sign in</button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </nav>
          {/* <div className="col col-sm-9">
            <img src={account_bg} alt="wave" className="d-none d-sm-block w-100"/>
          </div> */}
          {/* <div className="col col-sm-3 justify-content-end mx-0"> */}
            {/* <div className="signIn px-4 py-1">
              <button className="btn rounded-pill border-white text-light">Sign up</button>
              <Link to="#" className="ms-3 px-3 border-start text-decoration-none text-light">Sign in</Link>
            </div> */}
          {/* </div> */}
        </div>


          {/* <div className="container py-3">
            <div className="logo">
            </div>
          </div> */}
          
         
          {/* <img src={wave} alt="wave" className="w-100 d-none d-sm-block"/> */}

        

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