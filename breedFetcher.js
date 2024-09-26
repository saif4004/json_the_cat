const needle = require('needle');
const args = process.argv.slice(2);

needle.get(`https://api.thsecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {

  if (error) {
    console.log("Error!!. Unable to get info from API.");
    return;
  }
  if (response.statusCode === 200 && body.length !== 0) {
    console.log(body[0].description);
  } else {
    console.log('Breed is not found');
  }
});