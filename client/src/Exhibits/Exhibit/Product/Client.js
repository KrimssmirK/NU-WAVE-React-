import fetch from 'isomorphic-fetch'

class Client {
  getProductDetail(productID, success) {
    const url = `http://localhost:3000/api/product/detail/${productID}`
    return fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(success)
  }

  getProductImages(success) {
    const url = `http://localhost:3000/api/product/images/${this.productID}`
    return fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(success)
  }

  getRatingsInfo(success) {
    const url = `http://localhost:3000/api/product/ratings/guest/${this.productID}`
    return fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(success)
  }

  rateProduct(star_number, success) {
    const url = `http://localhost:3000/api/product/ratings/guest/${this.productID}`
    return fetch(url, {
      method: 'post',
      body: JSON.stringify({ guest_rate: star_number }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(success)
  }

  getViews(success) {
    const url = `http://localhost:3000/api/product/views/${this.productID}`
    return fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(success)
  }

  getLikes(success) {
    const url = `http://localhost:3000/api/product/like/guest/${this.productID}`
    return fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(success)
  }

  updateLikes(hasLiked) {
    const url = hasLiked ? `http://localhost:3000/api/product/like/${this.productID}` : `https://nu-centie.herokuapp.com/api/product/unlike/${this.productID}`
    return fetch(url, {
      method: 'post',
      headers: {
        Accept: 'application/json',
      },
    }).then(this.checkStatus)
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error);
      throw error;
    }
  }

  parseJSON(response) {
    return response.json();
  }
}

export const client = new Client()