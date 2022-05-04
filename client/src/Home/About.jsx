import Abouts from './img/AboutUs.svg'
import Logo from './img/nu_logo.png'
import './Home.css'
const AboutUs = ({ AboutUs }) => (
  <div className='container-sm About'>
       {/**IMAGE ABOUT US */}
      {/* <div className='d-flex justify-content-center'>
      <img src={Abouts} style={{width:30 + '%'}}/>
      </div> */}
        
        {/**TWO COLUMNS */}
    <div>
      <div class="container">
        <div class="row">
            
            <div class="col-md-6 d-flex align-items-center " style={{fontSize: 20 + 'px'}}>
                <p>The Center for Innovation and Entrepreneurship envisioned to be an inclusive, realistic, and collaborative community achieving all its strategic objectives.</p>
            </div>
            <div class="col-md-6 text-end">
                <img src ={Logo} alt="" className="img-fluid"/>
            </div>
        </div>
        </div>
    </div>
  </div>
  
)

export default AboutUs