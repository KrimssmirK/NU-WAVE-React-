import { Route, Routes } from 'react-router-dom'

// pages
import Home from './Home/Home'

import ExhibitsContainer from './Exhibits/ExhibitsContainer'
import ExhibitContainer from './Exhibits/Exhibit/ExhibitContainer'
import ProductContainer from './Exhibits/Exhibit/Product/ProductContainer'

import Gallery from './Gallery/Gallery'

import About from './About/About'

import Contact from './Contact/Contact'

import Article from './Article/Container'

const Content = () => (
  <div className='Content' style={{overflow: 'hidden'}}>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/exhibits' element={<ExhibitsContainer />} /> 
      <Route exact path='/exhibit/:exhibitID' element={<ExhibitContainer />} />
      <Route exact path='/product/:productID' element={<ProductContainer />} />
      <Route exact path='/gallery' element={<Gallery />} /> 
      <Route exact path='/article' element={<Article />} />
      <Route exact path='/about' element={<About />} /> 
      <Route exact path='/contact' element={<Contact />} />
    </Routes>
  </div>
)

export default Content