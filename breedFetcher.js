const needle = require('needle');

const fetchBreedDescription = (breedName, callback) => {

  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error);
      
    }
    if (response.statusCode === 200 && body.length !== 0) {
      callback(error,body[0].description);
    } else {
      callback(null);
    }
  });
};
module.exports = fetchBreedDescription;

