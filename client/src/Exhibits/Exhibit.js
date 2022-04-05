import React, { Component } from 'react'
import './style/Exhibit.css'
import { Link } from 'react-router-dom'
import { client } from './Client'

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
            <Link to={`/exhibit/${this.props.exhibitID}`} >
          <div className="card">
            
            <img src={imageSrc} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.description}</p>
            </div>
          </div> 
          </Link>
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
              </p>
            </div>
          </div>
        </div>     
      )
    }
  }
  }

export default Exhibit