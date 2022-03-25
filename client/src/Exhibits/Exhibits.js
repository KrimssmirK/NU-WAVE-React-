import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Exhibits.css'
import { client } from './Client'

import white from './img/white.png'
import { Link } from 'react-router-dom'

import Sway from './Sway'

class Exhibits extends Component{
    state = {
      isFetched: false,
      exhibits: [],
    }
  
    componentDidMount() {
      this.interval = setTimeout(() => {
        this.loadExhibitsFromServer()
      }, 1000)
    }
  
    loadExhibitsFromServer = () => {
      client.getExhibits((serverExhibits) => {
        this.setState({ exhibits: serverExhibits, isFetched: true })
      })
    }
  
    handleEnterExhibit = (exhibit_name, exhibit_description) => {
      sessionStorage.setItem('exhibit_name', exhibit_name);
      sessionStorage.setItem('exhibit_description', exhibit_description);
    }
      
    render() {
      const exhibits = this.state.exhibits.map((exhibit) => (
        <Exhibit
          key={exhibit.id} 
          id={exhibit.id}
          title={exhibit.title}
          description={exhibit.description}
          onEnterExhibit={this.handleEnterExhibit}
        />
      ));
      return (
        <div className='Exhibits'>
          <div className='row g-4'>
          {exhibits}
          <Sway />
          <div className="col-lg-4 col-md-3 target-exhibit-kenji" onClick={this.handleArchivedExhibit}>
          <div className='exhibit-img py-2'>
          </div>
          <div className="exhibit-description text-center py-3">
          <div className='exhibit-img py-2'>
                <img className='img-fluid' src={white} alt='not available' />
              </div>
            <h4>Exhibit Archived</h4>
          </div>
          </div>
        </div>
        </div>
        
      )
    }  
  }
  
  class Exhibit extends React.Component{
    state = {
      image: {},
    }
  
    componentDidMount() {
      this.loadExhibitImageFromServer(this.props.id)
    }
  
    loadExhibitImageFromServer = (exhibitId) => {
      client.getExhibitImage(exhibitId, (serverExhibitImage) => {
        this.setState({ image: serverExhibitImage })
      })
    }
  
    handleEnterExhibit = () => {
      this.props.onEnterExhibit(this.props.title, this.props.description);
    }
    handleArchivedExhibit = () => {
      alert('This feature will be available soon')
    }
  
    convertBinaryImagesToSrc = (contentType, data) => {
      return `data:${contentType};base64,${data}`
    }
  
    render() {
      const src_of_image = Object.keys(this.state.image).length ? this.convertBinaryImagesToSrc(this.state.image.contentType, this.state.image.data) : ''
      return (
        <Link to='/exhibits/products' onClick={this.handleEnterExhibit} className='col-lg-4 col-md-3 target-exhibit-kenji'>
          <div className="">
          <div className='exhibit-img py-2'>
            <img className='img-fluid' src={src_of_image} alt='not available' />
          </div>
          <div className="exhibit-description py-3">
            <h4>{this.props.title}</h4>
            <h6>{this.props.description}</h6>
          </div>
        </div>
        </Link>
        
      );
    }
  }

export default Exhibits