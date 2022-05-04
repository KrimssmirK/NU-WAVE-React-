import { Link } from 'react-router-dom'
import '../Footer.css'

const QuickLinks = () => (
    <div className='QuickLinks'>
    <div className='d-flex justify-content-center'>
        <div>
        <div className='title'>
        <h1 className='h5' style={{color: 'white'}}>Quick Links</h1>
      </div>
      <div className='content'>
        <ul style={{ listStyleType: 'none', padding: 0}}>
          <li >
            <Link to='#' style={{ color: 'white', textDecoration: 'none',}}>
              Home
            </Link>
          </li>
          <li>
            <Link to='#' style={{ color: 'white', textDecoration: 'none'}}>
              About Us
            </Link>
          </li>
          <li>
            <Link to='#' style={{ color: 'white', textDecoration: 'none'}}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to='#' style={{ color: 'white', textDecoration: 'none'}}>
              Articles
            </Link>
          </li>
        </ul>
      </div>
        </div>
    </div>
      
    </div> 
  )
  
  export default QuickLinks