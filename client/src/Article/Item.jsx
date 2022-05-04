import img_item from './img/item.png'

/**
 * 
 * data
 * {
 *  title, description, uploadedBy, date
 * }
 */
const Item = ({ data }) => (
  <div className='Item m-4 p-5'>
    <div className='d-flex justify-content-center'>
      <div className='img mx-4' style={{width: 30 + '%', height: 15 + 'vw', textAlign: 'right',}}>
        <img src={img_item} alt='img_item' style={{maxWidth: 100 + '%', maxHeight: 100 + '%'}}/>
      </div>
      <div className='description'>
        <p className='mb-0' style={{color: 'red'}}>NU WAVE LATEST</p>
        <h3>{data.title}</h3> 
        <p className='fw-light'>{data.description}</p>
        <div className='d-flex'>
          <p className='fw-bold me-5'>By {data.uploadedBy}</p>
          <p className='fw-light'>{data.date}</p>
        </div>
      </div>
    </div>
  </div>
)

export default Item

// IT’S Women’s Month! Let us celebrate Women!