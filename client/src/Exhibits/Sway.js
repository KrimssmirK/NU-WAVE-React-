import React from 'react-router-dom'
import sway from './img/sway.png'

const Sway = () => (
  <div className="col-lg-4 col-md-3 target-exhibit-kenji">
    <a href="https://sway.office.com/DZ96lKDqnJulnCUu?ref=Link" target="_blank">
      <div className='exhibit-img py-2'>
        <img className='img-fluid' src={sway} alt='not available' />
      </div>
      <div className="exhibit-description py-3">
        <h4 className="ex-title">
                  1st NU - Philippines Virtual Exhibit
                  of Entrepreneurial Mind and
                  Technopreneurship
        </h4>
        <h6>Past exhibit</h6>
      </div>
    </a>
  </div>
)

export default Sway