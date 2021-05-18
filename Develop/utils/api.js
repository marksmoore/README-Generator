const axios = require('axios');


const api = {
  getUser(userName) {

    // Make a request for a user with a given ID
    axios.get('https://api.github.com/users/' + userName)
      .then(function (response) {
        // handle success
        return response.data
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
};

module.exports = api;