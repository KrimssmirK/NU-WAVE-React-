import { Component } from 'react'
import { client } from './Client'
import './style/Product.css'
import { useNavigate } from 'react-router-dom'

import ProductImages from './ProductImages'
import ProductDetail from './ProductDetail'


const BreadCrumb = props => {
  const navigate = useNavigate()
  return (
    <div className="container mt-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" onClick={() => {navigate(-1)}} style={{ cursor: 'pointer' }}>
            NU Unites
          </li>
          <li className="breadcrumb-item active" aria-current="page">{props.product_name}</li>
        </ol>
      </nav>
    </div>
  )
}

class Product extends Component {
    state = {
      isFetched: false,
      product: {},
    }

    componentDidMount() {
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
      client.getProductDetail(this.props.productID, (serverProductDetail) => {
        this.setState({ product: serverProductDetail, isFetched: true })
      })
    }
  
    changeFormatOfMembers = (members) => {
      let formatted_members = ''
      for (var i = 0; i < this.state.product.number_of_members; i++) {
        if (i !== this.state.product.number_of_members - 1) {
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
        description: this.state.product.description,
        state_of_the_value_proposition: this.state.product.state_of_the_value_proposition,
      }
      if (this.state.isFetched) {
        return (
          <div className='Product'>
            <BreadCrumb product_name={productDetail.product_name} />
            <div className="py-3">
              <div className="container prod-container">
                <div className="row p-md-5">
                  {/* <ProductImages /> */}
                  <ProductDetail {...productDetail} />
                </div>
              </div>
            </div>
          </div>
        )
      } else { 
        return (
          <div className='d-flex justify-content-center p-5'>
            <div className="spinner-border" role="status">
              <span className="visually-hidden ">Loading...</span>
            </div>
          </div>
        )
      }
    }
  }

export default Product
  
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  

