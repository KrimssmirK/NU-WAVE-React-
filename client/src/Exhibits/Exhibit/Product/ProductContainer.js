import { useParams } from 'react-router-dom'
import Product from './Product'

const ProductContainer = () => {
  const { productID } = useParams()
  return (
    <Product productID={productID} /> 
  )
}

export default ProductContainer