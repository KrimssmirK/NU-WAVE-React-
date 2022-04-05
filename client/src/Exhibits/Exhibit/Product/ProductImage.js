import { Component } from 'react'

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

export default ProductImage