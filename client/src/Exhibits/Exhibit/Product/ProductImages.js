import { client } from './Client'
import { Component } from 'react'

import ProductImage from './ProductImage'
import Ratings from './Ratings'
import Views from './Views'
import Likes from './Likes'

class ProductImages extends Component {
  state = {
    isFetched: false,
    product_images: [],
    main_image_src: '#',
  }
  
  componentDidMount() {
    this.interval = setTimeout(() => {
      this.loadProductImagesFromServer()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
  
  loadProductImagesFromServer = () => {
    client.getProductImages((serverProductImages) => {
      this.setState(
        { product_images: serverProductImages, 
          main_image_src: this.getMainImageSrc(serverProductImages),
          isFetched: true,
        }
      )
    })
  }
  
  getMainImageSrc = (images) => {
    const main_image = images[0]
    return `data:${main_image.contentType};base64,${main_image.data}`
  }
  
  convertBinaryImagesToSrc = (contentType, data) => {
    return `data:${contentType};base64,${data}`
  }
  
  handleClickThumbnail = (new_main_image) => {
    this.setState({ main_image_src: new_main_image })
  }
  
  render() {
      if (this.state.product_images.length) {
        const images = this.state.product_images.map(image => (
          <ProductImage
            key={image.id}
            id={image.id} 
            src={this.convertBinaryImagesToSrc(image.contentType, image.data)}
            onClickThumbnail={this.handleClickThumbnail}
          />
        ))
        return (
          <div className="col-md-6 text-center">
            <div className="container main-img-container my-auto p-2">
              <img 
                src={this.state.main_image_src}
                alt="" 
                id="active_img" 
                className="img-fluid img-thumbnail main-img mx-auto d-block"
              />
            </div>
            <div className="container small-img-container">
              <div className="row">
                <div className="small-img-group py-3 d-flex justify-content-evenly">
                  {images}
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className='col-md-5'>
                  <Ratings />
                </div>
                <Views />
                <Likes />
              </div>
            </div>
          </div>
        )
      } else {
        return (<div></div>)
      }
  }
}

export default ProductImages 