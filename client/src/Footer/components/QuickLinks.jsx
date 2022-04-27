import { Link } from 'react-router-dom'

const QuickLinks = () => (
    <div className='QuickLinks'>
    <div className='d-flex justify-content-center'>
        <div>
        <div className='title'>
        <h1 className='h5'>Quick Links</h1>
      </div>
      <div className='content'>
        <ul style={{ listStyleType: 'none', padding: 0}}>
          <li >
            <Link to='#' style={{ color: 'black', textDecoration: 'none'}}>
              Home
            </Link>
          </li>
          <li>
            <Link to='#' style={{ color: 'black', textDecoration: 'none'}}>
              Products
            </Link>
          </li>
          <li>
            <Link to='#' style={{ color: 'black', textDecoration: 'none'}}>
              Exhibits
            </Link>
          </li>
          <li>
            <Link to='#' style={{ color: 'black', textDecoration: 'none'}}>
              Innovators
            </Link>
          </li>
          <li>
            <Link to='#' style={{ color: 'black', textDecoration: 'none'}}>
              Articles
            </Link>
          </li>
          <li>
            <Link to='#' style={{ color: 'black', textDecoration: 'none'}}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
        </div>
    </div>
      
    </div> 
  )
  
  export default QuickLinks