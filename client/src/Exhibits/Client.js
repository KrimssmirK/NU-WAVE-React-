import fetch from 'isomorphic-fetch'

class Client {
    getExhibits(success) {
        return fetch('http://localhost:3000/api/exhibits', {
          headers: {
            Accept: 'application/json',
          },
        }).then(this.checkStatus)
          .then(this.parseJSON)
          .then(success)
      }
    
      getExhibitImage(exhibitId, success) {
        return fetch(`http://localhost:3000/api/exhibit/image/${exhibitId}`, {
          headers: {
            Accept: 'application/json',
          },
          
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