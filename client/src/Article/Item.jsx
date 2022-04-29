import img_item from './img/item.png'

const Item = ({ title }) => (
  <div className='Item m-4 p-5'>
    <div className='d-flex justify-content-center'>
      <div className='img mx-4' style={{width: 30 + '%', height: 15 + 'vw', textAlign: 'right',}}>
        <img src={img_item} alt='img_item' style={{maxWidth: 100 + '%', maxHeight: 100 + '%'}}/>
      </div>
      <div className='description'>
        <p className='mb-0' style={{color: 'red'}}>NU WAVE LATEST</p>
        <h3>IT’S Women’s Month! Let us celebrate Women!</h3> 
        <p className='fw-light'>Late Night with Dr. Ria Liza featuring up-close and personal with The Philippine Association of University Women PAUW - NATIONAL.</p>
        <div className='d-flex'>
          <p className='fw-bold me-5'>By Ria Liza Centeno</p>
          <p className='fw-light'>March 26, 2022</p>
        </div>
      </div>
    </div>
  </div>
)

export default Item

// IT’S Women’s Month! Let us celebrate Women!