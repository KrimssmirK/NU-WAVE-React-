import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Exhibits.css'
import { client } from './Client'
import sway from './img/sway.png'
import white from './img/white.png'

class Exhibits extends Component{
    state = {
      exhibits: [],
    }
  
    componentDidMount() {
      this.loadExhibitsFromServer()
    }
  
    loadExhibitsFromServer = () => {
      client.getExhibits((serverExhibits) => {
        this.setState({ exhibits: serverExhibits })
      })
    }
  
    handleEnterExhibit = (exhibit_name, exhibit_description) => {
      sessionStorage.setItem('exhibit_name', exhibit_name);
      sessionStorage.setItem('exhibit_description', exhibit_description);
      window.location.href='./products.html';
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
          <div className="col-lg-4 col-md-3 target-exhibit-kenji">
            <a href="https://sway.office.com/DZ96lKDqnJulnCUu?ref=Link" target="_blank">
              <div className='exhibit-img py-2'>
                <img className='img-fluid' src={sway} alt='not available' />
              </div>
              <div className="exhibit-description py-3">
                <h4 className="ex-title">
                  1st NU - Philippines Virtual Exhibit
                  of Entrepreneurial Mind and
                  Technopreneurship
                </h4>
                <h6>Past exhibit</h6>
              </div>
            </a>
          </div>
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
        <div className="col-lg-4 col-md-3 target-exhibit-kenji" onClick={this.handleEnterExhibit}>
          <div className='exhibit-img py-2'>
            <img className='img-fluid' src={src_of_image} alt='not available' />
          </div>
          <div className="exhibit-description py-3">
            <h4>{this.props.title}</h4>
            <h6>{this.props.description}</h6>
          </div>
        </div>
      );
    }
  }

export default Exhibits