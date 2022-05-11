import { Route, Routes } from 'react-router-dom'

// pages
import Home from './Home/Home'

import ExhibitsContainer from './Exhibits/ExhibitsContainer'
import ExhibitContainer from './Exhibits/Exhibit/ExhibitContainer'
// import ProductContainer from './Exhibits/Exhibit/Product/ProductContainer'

import FeatInnovator from './Innovator/featured_innovators'

import Products from './Products/Products'

import About from './About/About'

import Contact from './Contact/Contact'

import Article from './Article/Container'

import ComingSoon from './Coming_Soon'

const Content = () => (
  <div className='Content' style={{overflow: 'hidden'}}>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/exhibits' element={<ExhibitsContainer />} /> 
      <Route exact path='/exhibit/:exhibitID' element={<ExhibitContainer />} />
      <Route exact path='/featured_innovators' element={<FeatInnovator />} /> 
      {/* <Route exact path='/product/:productID' element={<ProductContainer />} /> */}
      <Route exact path='/products' element={<Products />} />
      <Route exact path='/article' element={<Article />} />
      <Route exact path='/about' element={<About />} /> 
      <Route exact path='/contact' element={<Contact />} />
      <Route exact path='/Coming_Soon' element={<ComingSoon />} />
    </Routes>
  </div>
)

export default Content