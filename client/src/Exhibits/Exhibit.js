import React, { Component } from 'react'
import './Exhibit.css'
import { Link } from 'react-router-dom'
import { client } from './Client'

// need { exhibitID: String, title: String, description: String }
class Exhibit extends Component {
  state = {
    isFetched: false,
    image: {},
  }
    
  componentDidMount() {
    this.interval = setTimeout(() => {
      this.loadExhibitImageFromServer(this.props.exhibitID)
    }, 1000)
    
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
    
  loadExhibitImageFromServer = (exhibitId) => {
    client.getExhibitImage(exhibitId, (serverExhibitImage) => {
      this.setState({ image: serverExhibitImage, isFetched: true })
    })
  }

  convertBinaryImagesToSrc = (contentType, data) => {
    return `data:${contentType};base64,${data}`
  }

  render() {
    if (this.state.isFetched) {
      const imageSrc = this.convertBinaryImagesToSrc(this.state.image.contentType, this.state.image.data)
      return (
        <div className='Exhibit col-sm-3'>
          <div className="card  ">
            <img src={imageSrc} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.description}</p>
            </div>
          </div> 
        </div>
      )
    } else {
      return (
        <div className='Exhibit col-sm-3'>
          <div className="card " aria-hidden="true">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                {/* <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span> */}
              </p>
            </div>
          </div>
        </div>
        
      )
    }
  }

//   render() {
//     return (
//         <div className='Exhibit'>
//           <Link 
//             to={`/exhibit/${this.props.exhibitID}`} 
//             className='col-lg-4 col-md-3 target-exhibit-kenji'
//           >
//             <div className='exhibit-img py-2'>
//               {
//                 this.state.isFetched ? 
//                 <Image style={'img-fluid'} image={
//                   this.convertBinaryImagesToSrc(this.state.image.contentType, this.state.image.data)
//                 }/>
//                 :
//                 <Image style={'spinner-border'} image={'...'} />
//               }
//             </div>
//             <div className="exhibit-description py-3">
//               <h4>{this.props.title}</h4>
//               <p>{this.props.description}</p>
//             </div>
//           </Link>
//         </div>
//     )
  }


const Image = ({ style, image }) => (
  <div className='Image'>
    <img 
      className={style}
      src={image}
    //   alt='not available'
    />
  </div>
)

export default Exhibit