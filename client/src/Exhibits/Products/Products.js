import React, { Component } from 'react'
import './Products.css'
import ProductsBanner from './ProductsBanner'
import Search from './Search'
import Temp from './Temp'
import { client } from './Client'
import { Link } from 'react-router-dom'

const ProductsContainer = () => (
  <div className='ProductContainer'>
    <ProductsBanner />
    <Search />
    <Temp>
      <Products />
    </Temp>
  </div>
)

class Products extends Component {
    state = {
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
      client.getProducts((serverProducts) => {
        this.setState({ products: serverProducts })
      })
    }
    
    handleClickView = (product_id) => {
      this.storeProductName(product_id)
    }
  
    storeProductName = (product_id) => {
      sessionStorage.setItem('product_id', product_id)
    }
  
    render() {
      const productItems = this.state.products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          product_name={product.name}
          description={product.description}
          onClickView={this.handleClickView}
        />
      ))
      if (this.state.products.length) {
        return (
          <div className='row justify-content-evenly pt-5 g-3 mb-5'>
            {productItems}
          </div>
        )
      } else {
        return (
          <div></div>
        )
      }
    }
  }
  
  
  class Product extends Component {
    state = {
      main_image: {},
    }
  
    componentDidMount() {
      this.interval = setTimeout(() => {
        this.loadProductMainImageFromServer()
      }, 1000)
      
    }

    componentWillUnmount() {
      clearInterval(this.interval)
    }
  
    loadProductMainImageFromServer = () => {
      client.getProductMainImage(this.props.id, (serverProductMainImage) => {
        this.setState({ main_image: serverProductMainImage })
      })
    }
  
    handleClickView = () => {
      this.props.onClickView(this.props.id);
    }
  
    convertBinaryImagesToSrc = (contentType, data) => {
      return `data:${contentType};base64,${data}`
    }
  
    render() {
      const src_of_image = Object.keys(this.state.main_image).length ? this.convertBinaryImagesToSrc(this.state.main_image.contentType, this.state.main_image.data) : ''
      return (
        <div className='col-lg-4 col-md-6 prod-card text-center'>
          <div className="prod-img py-3">
            <img 
            src={src_of_image} alt='' className='img-fluid'/>
          </div>
          <h4 className="prod-title">{this.props.product_name}</h4>
          <p className="prod-description px-3">{this.props.description}</p>
          <Link to='/exhibits/products/product' onClick={this.handleClickView}>
            <button  className='btn mt-2 mb-3'>View</button>
          </Link>
        </div>
      );
    }
  }

export default ProductsContainer