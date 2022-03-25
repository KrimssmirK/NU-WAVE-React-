import { Route, Routes } from 'react-router-dom'

// pages
import Contact from './Contact/Contact'
import About from './About/About'
import Gallery from './Gallery/Gallery'
import Home from './Home/Home'
import Exhibits from './Exhibits/Exhibits'
import ProductsContainer from './Exhibits/Products/Products'
import Product from './Exhibits/Products/Product/Product'

const Content = () => (
  <div className='Content'>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/exhibits' element={<Exhibits />} /> 
      <Route exact path='/exhibits/products' element={<ProductsContainer />} />
      <Route exact path='/exhibits/products/product' element={<Product />} />
      <Route exact path='/gallery' element={<Gallery />} /> 
      <Route exact path='/about' element={<About />} /> 
      <Route exact path='/contact' element={<Contact />} />
    </Routes>
  </div>
)

export default Content