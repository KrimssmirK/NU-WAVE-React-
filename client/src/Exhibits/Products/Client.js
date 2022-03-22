import fetch from 'isomorphic-fetch'

class Client {
  constructor() {
    this.exhibit_name = sessionStorage.getItem('exhibit_name')
  }
  getProducts(success) {
    const url = '/api/products/' + this.exhibit_name
    return fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(success)
  }

  getProductMainImage(productID, success) {
    const url = '/api/product/image/' + productID
    return fetch(url, {
      headers: {
        Accept: 'application/json',
      }
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(success)
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