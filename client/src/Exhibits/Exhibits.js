import React, { Component } from 'react'
import './style/Exhibits.css'
import { client } from './Client'
// page
import Exhibit from './Exhibit'
import Sway from './Sway'
import Archive from './Archive'



class Exhibits extends Component {
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

    componentWillUnmount() {
      clearInterval(this.interval)
    }
      
    render() {
      if (!this.state.isFetched) {
        return (
          <div className='Exhibits'>
            <div class="d-flex justify-content-center p-5">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          </div>
          
        )
      }
      return (
        <div className='Exhibits'>
          <div className='row'>
            {
              this.state.exhibits.map((exhibit) => (
                <Exhibit
                  key={exhibit.id} 
                  exhibitID={exhibit.id}
                  title={exhibit.title}
                  description={exhibit.description}
                />
              ))
            }
            <Sway />
            <Archive />
          </div>
        </div>
        
      )
    }  
  }

export default Exhibits