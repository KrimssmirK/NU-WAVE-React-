import Abouts from './img/AboutUs.svg'
import Logo from './img/LOGO.svg'
import './Home.css'
const AboutUs = ({ AboutUs }) => (
  <div className='container-sm About'>
       {/**IMAGE ABOUT US */}
      <div className='d-flex justify-content-center'>
      <img src={Abouts} style={{width:30 + '%'}}/>
      </div>
        
        {/**TWO COLUMNS */}
    <div>
      <div class="container">
        <div class="row">
            <div class="col">
                <img src ={Logo} style={{width:70 + '%'}}/>
            </div>
            <div class="col d-flex align-items-center " style={{fontFamily: 'Futura', fontSize: 20 + 'px'}}>
                <p>The Center for Innovation and Entrepreneurship envisioned to be an inclusive, realistic, and collaborative community achieving all its strategic objectives.</p>
            </div>
        </div>
        </div>
    </div>
  </div>
  
)

export default AboutUs