import { Route, Routes } from 'react-router-dom'

// pages
import Home from './Home/Home'

import ExhibitsContainer from './Exhibits/ExhibitsContainer'
import ExhibitContainer from './Exhibits/Exhibit/ExhibitContainer'
import ProductContainer from './Exhibits/Exhibit/Product/ProductContainer'

import Gallery from './Gallery/Gallery'

import About from './About/About'

import Contact from './Contact/Contact'

const Content = () => (
  <div className='Content'>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/exhibits' element={<ExhibitsContainer />} /> 
      <Route exact path='/exhibit/:exhibitID' element={<ExhibitContainer />} />
      <Route exact path='/product/:productID' element={<ProductContainer />} />
      <Route exact path='/gallery' element={<Gallery />} /> 
      <Route exact path='/about' element={<About />} /> 
      <Route exact path='/contact' element={<Contact />} />
    </Routes>
  </div>
)

export default Content