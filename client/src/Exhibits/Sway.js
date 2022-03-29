import sway from './img/sway.png'
import './style/Sway.css'

const Sway = () => (
  <div className='Sway col-sm-3'>
    <a 
      href='https://sway.office.com/DZ96lKDqnJulnCUu?ref=Link'
      target='_blank'
      rel='noreferrer'
    >
      <div className='card'>
        <img 
          src={sway}
          alt='Past Exhibit'
          className='card-img-top'
        />
        <div className='card-body'>
          <h5 className='card-title'>
            1st NU - Philippines Virtual Exhibit
            of Entrepreneurial Mind and
            Technopreneurship
          </h5>
          <p className='card-text'>Past Exhibit</p>
        </div>
      </div>  
    </a>
  </div>
)

export default Sway