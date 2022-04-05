import { Component } from 'react'
import { client } from './Client'

class Ratings extends Component {
  state = {
    ratings: 0,
    hasRated: false,
  }
  
  componentDidMount() {
    this.interval = setTimeout(() => {
      this.loadRatingsInfoFromServer()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
  
  loadRatingsInfoFromServer = () => {
    client.getRatingsInfo((serverRatingsInfo) => {
      this.setState({ ratings: serverRatingsInfo.ratings, hasRated: serverRatingsInfo.hasRated })
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

export default Ratings