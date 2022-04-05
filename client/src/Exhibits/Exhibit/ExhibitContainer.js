import Search from './Search'
import Temp from './Temp'
import ProductList from './ProductList'
import { useNavigate, useParams } from 'react-router-dom'

const Breadcrumb = () => {
  const navigate = useNavigate()
  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" onClick={() => {navigate(-1)}} style={{ cursor: 'pointer' }}>
          Exhibits
        </li>
        <li class="breadcrumb-item active" aria-current="page">NU UNITES</li>
      </ol>
    </nav>
  )
}

const ExhibitContainer = () => {
  const { exhibitID } = useParams()
  
  return (
    <div className='ExhibitContainer'>
      <div className='d-flex justify-content-between mt-1 mb-1 p-2'>
        <Breadcrumb />
        <Search />
      </div>
      <div className='row ms-1 me-1'>
        <div className='col-2'>
          <Temp />
        </div>
        <div className='col-10'>
          <ProductList exhibitID={exhibitID}/>
        </div>
      </div>
    </div>
  )
}

export default ExhibitContainer