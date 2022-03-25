import React from 'react'
import white from './img/white.png'

const Archive = () => (
  <div className="col-lg-4 col-md-3 target-exhibit-kenji" >
          <div className='exhibit-img py-2'>
          </div>
          <div className="exhibit-description text-center py-3">
          <div className='exhibit-img py-2'>
                <img className='img-fluid' src={white} alt='not available' />
              </div>
            <h4>Exhibit Archived</h4>
          </div>
  </div>
)

export default Archive