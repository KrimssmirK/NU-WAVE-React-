import { Component } from 'react'
import './style/ProductList.css'
import { client } from './Client'
import ProductItem from './ProductItem'

class ProductList extends Component {
    state = {
      isFetched: false,
      products: [],
    }
  
    componentDidMount() {
      this.interval = setTimeout(() => {
        this.loadProductsFromServer()
      }, 1000)
      
    }

    componentWillUnmount() {
      clearInterval(this.interval)
    }
  
    loadProductsFromServer = () => {
      client.getProducts(this.props.exhibitID, (serverProducts) => {
        this.setState({ products: serverProducts, isFetched: true })
      })
    }
  
    render() {
      if (this.state.isFetched) {
        return (
          <div className='ProductList'>
            <div className='row justify-content-evenly  g-3 mb-5'>
              {
                this.state.products.map((product) => (
                  <ProductItem 
                    key={product.id}
                    productID={product.id}
                    product_name={product.name}
                    description={product.description}
                  />
                ))
              }
            </div>
          </div>
        )
      } else {
        return (
          <div className='ProductList'>
            <div className='d-flex justify-content-center p-5'>
              <div className="spinner-border" role="status">
                <span className="visually-hidden ">Loading...</span>
              </div>
            </div>
          </div>
          
        )
      }
    }
  }

  export default ProductList
  
  
  