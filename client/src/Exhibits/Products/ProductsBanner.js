import React, { Component } from 'react'
import './ProductsBanner.css'

class ProductsBanner extends Component {
    state = {
      exhibit_description : sessionStorage.getItem('exhibit_description')
    }
  
    handleBuffer = (arr) => {
      return btoa(
        arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
      )
    }

    render() {
      if (!this.props.image) {
          return (
            <div></div>
          )
      }
      return (
        <div className='container-fluid prod-banner' style={{ backgroundImage: `url(data:${this.props.image.contentType};base64,${this.handleBuffer(this.props.image.data)})`}}>
          <div className='banner-text mx-lg-5 px-5'>
            <h1 className='text-center fw-bold'>{this.props.exhibit_name}</h1>
            <p className='text-center mt-3'>{this.state.exhibit_description}</p>
          </div>
        </div>
      )
    }
  }

export default ProductsBanner