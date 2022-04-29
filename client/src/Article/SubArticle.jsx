import img_sub1 from './img/sub1.png'

const SubArticle = ({ style }) => (
  <div className={`SubArticle px-3 ${style}`} style={{width: 25 + '%'}}>
    <div className='img' >
      <img src={img_sub1} alt='img_sub1' style={{maxWidth: 100 + '%', maxHeight: 100 + '%'}}/>
    </div>
    <div className='content'>
      <p style={{ color: 'red', marginBottom: 0, marginTop: 10 }}>NU WAVE DAILY</p>
      <h2 className='h4'>Partnership with New Energy NEXUS and National University</h2>
      <p className='fw-light'>
        National University of the Philippines and New Energy Nexus 
        have formed a partnership to promote clean energy awareness 
        and capacity building through a variety of activities and phases.
      </p>
      <p className='fw-bold'>By The Center for Innovation and Entrepreneurship (CentIE).</p>
    </div>
  </div>
)

export default SubArticle