import NavBar from './NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer/Footer'
import Contact from './Contact/Contact'
import About from './About/About'
import Gallery from './Gallery/Gallery'
import Home from './Home/Home'
import Exhibits from './Exhibits/Exhibits'
import ProductsContainer from './Exhibits/Products/Products'

const App = () => (
  <div className='App'>
    <NavBar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/exhibits' element={<Exhibits />} /> 
        <Route exact path='/exhibits/products' element={<ProductsContainer/ >} />
        <Route exact path='/gallery' element={<Gallery />} /> 
        <Route exact path='/about' element={<About />} /> 
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    <Footer />
  </div>
)

export default App