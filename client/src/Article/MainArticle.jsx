import img_main1 from './img/main1.png'

const MainArticle = () => (
  <div className='MainArticle px-3'>
    <div className='d-flex justify-content-center'>
      <div className=''>
        <div className='imgContainer align-self-end' style={{width: 100 + '%', height: 20 + 'vw'}}>
          <img src={img_main1} alt='img_main1' style={{maxWidth: 100 + '%', maxHeight: 100 + '%'}} />
        </div>
      </div>
      <div className='description' style={{width: 40 + '%'}}>
        <p style={{color: 'red', textAlign: 'center', marginBottom: 0}}>NU WAVE INTERVIEW</p>
        <h2 style={{textAlign: 'center'}}>LIVE this morning at CNN Philippines</h2>
        <p style={{textAlign: 'center', marginTop: 0}}>By NU Wave</p>
        <p style={{textAlign: 'center', alignContent: 'center'}}>NU CentIE's Director Dr. Ria Liza Canlas on her award winning invention.</p>
      </div>
    </div>
  </div>
)

export default MainArticle

/**
 * reference for image
 * width: 100%;
    height: 15vw;
    object-fit: cover;
 */