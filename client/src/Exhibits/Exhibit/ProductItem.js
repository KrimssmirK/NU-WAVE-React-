import { Component } from 'react'
import { client } from './Client'
import { Link } from 'react-router-dom'
import './style/ProductItem.css'

class ProductItem extends Component {
  state = {
    isFetched: false,
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
    client.getProductMainImage(this.props.productID, (serverProductMainImage) => {
      this.setState({ main_image: serverProductMainImage, isFetched: true })
    })
  }
  
  convertBinaryImagesToSrc = (contentType, data) => {
    return `data:${contentType};base64,${data}`
  }
  
  render() {
    const src_of_image = this.state.isFetched ? 
    this.convertBinaryImagesToSrc(this.state.main_image.contentType, this.state.main_image.data) : ''
    return (
      <div className='ProductItem col-sm-3'>
        <Link to={`/product/${this.props.productID}`}>
          <div className='card'>
            <img 
              src={src_of_image} 
              alt='product' 
              className='card-img-top'
            />
            <div className='card-body'>
              <h4 className='card-title'>{this.props.product_name}</h4>
              <p className='card-text'>{this.props.description}</p>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default ProductItem