import React, { Component } from 'react'
import { client } from './Client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Product.css'
import { Link } from 'react-router-dom'

class ProductDashboard extends Component {
    state = {
      product: {},
    }

    componentDidMount() {
      console.log(`state -> ${this.state.product}`)
      this.interval = setTimeout(() => {
        this.loadProductDetailFromServer()
      }, 1000)
      // this.fetchIfTheGuestHasLiked()
      // this.fetchIfTheGuestHasRated()
    }

    componentWillUnmount() {
      clearInterval(this.interval)
    }
  
    loadProductDetailFromServer = () => {
      client.getProductDetail((serverProductDetail) => {
        this.setState({ product: serverProductDetail })
      })
    }
  
    changeFormatOfMembers = (members) => {
      let formatted_members = ''
      for (var i = 0; i < this.state.product.number_of_members; i++) {
        if (i != this.state.product.number_of_members - 1) {
          formatted_members = formatted_members + members[i].member + ';'
        } else {
          formatted_members = formatted_members + members[i].member
        }
      }
      return formatted_members
    }
  
    render() {
      const productDetail = {
        winners_name: this.state.product.winners_name,
        product_name: this.state.product.name,
        members: this.changeFormatOfMembers(this.state.product.members),
        intellectual_property: this.state.product.intellectual_property,
        social_impact: this.state.product.social_impact,
        output: this.state.product.output,
        mentors: this.state.product.mentors,
        faculty_in_charge: this.state.product.faculty_in_charge,
        campus: this.state.product.campus,
      }
      const productOtherDetail = {
        description: this.state.product.description,
        state_of_the_value_proposition: this.state.product.state_of_the_value_proposition,
      }
      if (Object.keys(this.state.product).length) {
        return (
          <div className="Product">
            <BreadCrumb product_name={productDetail.product_name} />
            <section className="py-3">
              <div className="container prod-container">
                <div className="row p-md-5">
                  <ProductImages />
                  <ProductDetail {...productDetail} />
                </div>
                <div className='container'>
                  <ProductOtherDetail {...productOtherDetail} />
                </div>
              </div>
            </section>
          </div>
        )
      } else { 
        return (<noscript></noscript>)
      }
    }
  }
  
  
  
  class ProductImages extends Component {
    state = {
      product_images: [],
      main_image_src: '#',
    }

    _isMounted = false
  
    componentDidMount() {
      this._isMounted = true
      if(this._isMounted) this.loadProductImagesFromServer()
    }

    componentWillUnmount() {
      this._isMounted = false
    }
  
    loadProductImagesFromServer = () => {
      client.getProductImages((serverProductImages) => {
        this.setState({ product_images: serverProductImages, main_image_src: this.getMainImageSrc(serverProductImages) })
        console.log(serverProductImages)
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
  
  class ProductImage extends Component {
    handleClickThumbnail = () => {
      this.props.onClickThumbnail(this.props.src)
    }
    render() {
      return (
        <div className="small-img-col p-lg-1">
          <img 
            src={this.props.src}
            width="100%" 
            alt="" 
            className="small-img img-fluid img-thumbnail"
            onClick={this.handleClickThumbnail}
            style={{ cursor: 'pointer' }}
          />
        </div>
      )
    }
  }
  
  class Ratings extends Component {
    state = {
      ratings: 0,
      hasRated: false,
    }

    _isMounted = false
  
    componentDidMount() {
      this._isMounted = true
      if (this._isMounted) this.loadRatingsInfoFromServer()
    }

    componentWillUnmount() {
      this._isMounted = false
    }
  
    loadRatingsInfoFromServer = () => {
      client.getRatingsInfo((serverRatingsInfo) => {
        this.setState({ ratings: serverRatingsInfo.ratings, hasRated: serverRatingsInfo.hasRated })
        console.log(serverRatingsInfo)
      })
    }
    
    handleClickStar = (star_number) => {
      client.rateProduct(star_number, (serverRatingsInfo) => {
        this.setState({ ratings: serverRatingsInfo.ratings, hasRated: serverRatingsInfo.hasRated })
      })
    }
  
    generateStarsColor = () => {
      let stars = []
      for (let i = 0; i < 5; i++) {
        if (i < this.state.ratings) {
          stars.push('bi bi-star-fill')
        } else {
          stars.push('bi bi-star')
        }
      }
      return stars
    }
    handleClickStar1 = () => {
      if (this.state.hasRated) {
        alert('you already rated this product')
      } else {
        this.handleClickStar(1)
      }
    }
    handleClickStar2 = () => {
      if (this.state.hasRated) {
        alert('you already rated this product')
      } else {
        this.handleClickStar(2)
      }
    }
    handleClickStar3 = () => {
      if (this.state.hasRated) {
        alert('you already rated this product')
      } else {
        this.handleClickStar(3)
      }
    }
    handleClickStar4 = () => {
      if (this.state.hasRated) {
        alert('you already rated this product')
      } else {
        this.handleClickStar(4)
      }
    }
    handleClickStar5 = () => {
      if (this.state.hasRated) {
        alert('you already rated this product')
      } else {
        this.handleClickStar(5)
      }
    }
    
    render() {
      const rateText = this.state.hasRated ? '(you already rated this)' : '(rate this)'
      const cursorStyle = this.state.hasRated ? '' : 'pointer'
      const stars = this.generateStarsColor()
      return (
        <div className='container' style={{ marginTop: 10}}>
          <div className='row'>
            <div className='col-12'>
              <div className="">
                <div className="rating">
                  <i className={stars[4]} style={{ color: '#ffcd01', cursor: cursorStyle}} onClick={this.handleClickStar5}></i>
                  <i className={stars[3]} style={{ color: '#ffcd01', cursor: cursorStyle}} onClick={this.handleClickStar4}></i>
                  <i className={stars[2]} style={{ color: '#ffcd01', cursor: cursorStyle}} onClick={this.handleClickStar3}></i>
                  <i className={stars[1]} style={{ color: '#ffcd01', cursor: cursorStyle}} onClick={this.handleClickStar2}></i>
                  <i className={stars[0]} style={{ color: '#ffcd01', cursor: cursorStyle}} onClick={this.handleClickStar1}></i> 
                </div>
              </div>
            </div>
            <div className='col-12 text-center'>
              <span className='' style={{ fontSize: 10 }}>{rateText}</span>
            </div>
          </div>
        </div>     
      );
    }
  }
  
  class Views extends Component {
    state = {
      no_of_views: 0,
    }

    _isMounted = false
  
    componentDidMount() {
      this._isMounted = true
      if (this._isMounted) this.loadViewsFromServer()
    }

    componentWillUnmount() {
      this._isMounted = false
    }
  
    loadViewsFromServer = () => {
      client.getViews((serverViewsInfo) => {
        this.setState({ no_of_views: serverViewsInfo.no_of_views })
      })
    }
  
    render() {
      return (
        <div className="col-md-2">
          <div className="py-2">
            <i className="bi bi-eye-fill"></i>
            <span> {this.state.no_of_views}</span>
          </div>
        </div>
      )
    }
  }
  
  class Likes extends Component {
    state = {
      no_of_likes: 0,
      hasLiked: false,
    }

    _isMounted = false
  
    componentDidMount() {
      this._isMounted = true
      if (this._isMounted) this.loadLikesFromServer()
    }

    componentWillUnmount() {
      this._isMounted = false
    }
  
    loadLikesFromServer = () => {
      client.getLikes((serverLikesInfo) => {
        this.setState({ no_of_likes: serverLikesInfo.no_of_likes, hasLiked: serverLikesInfo.hasLiked })
      })
    }
  
    handleClickLikes = () => {
      const incrementOrDecrement = this.state.hasLiked ? -1 : 1
      const hasLiked = !this.state.hasLiked
      this.setState(prevState => {
        return {
          no_of_likes: prevState.no_of_likes + incrementOrDecrement,
          hasLiked: hasLiked,
        }
      })
      this.updateNoOfLikes(hasLiked)
    }
  
    updateNoOfLikes = (hasLiked) => {
      client.updateLikes(hasLiked)
    }
  
    render() {
      if (this.state.hasLiked) {
        return (
          <div className="col-md-5">
            <div className="py-2">
              <i className="bi bi-hand-thumbs-up-fill" onClick={this.handleClickLikes} style={{ color: '#35408E', cursor: 'pointer' }}></i>
              <span> {this.state.no_of_likes}</span>
            </div>
          </div>
        ); 
      } else {
        return (
          <div className="col-md-5">
            <div className="py-2">
              <i className="bi bi-hand-thumbs-up-fill" onClick={this.handleClickLikes} style={{ cursor: 'pointer' }}></i>
              <span> {this.state.no_of_likes}</span>
            </div>
          </div>
        ); 
      }
      
    }
  }
  
  const BreadCrumb = props => {
    return (
      <div className="container mt-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to='/exhibits/products'>
                NU Unites
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">{props.product_name}</li>
          </ol>
        </nav>
      </div>
    )
  }
  
  const ProductDetail = props => {
    const titleStyle = { color: 'grey' }
    const contentStyle = { fontWeight: 'bolder' }
    return (
      <div className="col-md-6 lh-lg">
        <div>
          <span className="fw-bold" style={titleStyle}>Product name: </span>
          <span style={contentStyle}>{props.product_name}</span>
        </div>
        <div>
          <span className="fw-bold" style={titleStyle}>Innovators: </span>
          <span style={contentStyle}>{props.members}</span>
        </div>
        <div>
          <span className="fw-bold" style={titleStyle}>Intellectual Property: </span>
          <span style={contentStyle}>{props.intellectual_property}</span>
        </div>
        <div>
          <span className="fw-bold" style={titleStyle}>Social impact: </span>
          <span style={contentStyle}>{props.social_impact}</span>
        </div>
        <div>
          <span className="fw-bold" style={titleStyle}>Output: </span>
          <span style={contentStyle}>{props.output}</span>
        </div>
        <div>
          <span className="fw-bold" style={titleStyle}>Mentors: </span>
          <span style={contentStyle}>{props.mentors}</span>
        </div>
        <div>
          <span className="fw-bold" style={titleStyle}>Faculty in charge: </span>
          <span style={contentStyle}>{props.faculty_in_charge}</span>
        </div>
        <div>
          <span className="fw-bold" style={titleStyle}>Campus: </span>
          <span style={contentStyle}>{props.campus}</span>
        </div>
        <button 
          className="purchase-btn mt-5 btn" 
          data-bs-toggle="modal" 
          data-bs-target="#contact-form"
        >
          Buy
        </button>
      </div>
    )
  }
  
  
  const ProductOtherDetail = props => {
    const titleStyle = { color: 'grey' }
    const contentStyle = { fontWeight: 'bolder'}
    return (
      <div className='container lh-lg py-5 px-0'>
        <div>
          <span className="fw-bold" style={titleStyle}>Description: <br/></span>
          <span style={contentStyle}>
            {props.description}
          </span>
        </div>
        <div>
          <span className="fw-bold" style={titleStyle}>State of the value proposition: <br/></span>
          <span style={contentStyle}>
            {props.state_of_the_value_proposition}
          </span>
        </div>
      </div>
    )
  }
  
export default ProductDashboard
