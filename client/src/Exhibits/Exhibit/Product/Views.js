import { Component } from 'react'
import { client } from './Client'

class Views extends Component {
    state = {
      no_of_views: 0,
    }
  
    componentDidMount() {
      this.interval = setTimeout(() => {
        this.loadViewsFromServer()
      }, 1000)
    }

    componentWillUnmount() {
      clearInterval(this.interval)
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

export default Views