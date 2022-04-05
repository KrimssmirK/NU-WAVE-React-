import { Component } from 'react'
import { client } from './Client'

class Likes extends Component {
    state = {
      no_of_likes: 0,
      hasLiked: false,
    }
  
    componentDidMount() {
      this.interval = setTimeout(() => {
        this.loadLikesFromServer()
      }, 1000)
    }

    componentWillUnmount() {
      clearInterval(this.interval)
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

export default Likes