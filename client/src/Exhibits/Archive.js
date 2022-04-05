import white from './img/white.png'
import './style/Archive.css'

const Archive = () => (
  <div className='Archive col-sm-3'>
    <div className='card'>
      <img 
        src={white}
        alt='archived'
        className='card-img-top'
      />
      <div className='card-body'>
        <h5 className='card-title'>Exhibit Archived</h5>
        <p className='card-text'>Archived</p>
      </div>
    </div>
  </div>
)

export default Archive