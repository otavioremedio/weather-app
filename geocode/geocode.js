const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address= ${encodedAddress}`,
    json: true
    }, (error, response, body) => {
      //3 parametro é a quantidade de espaços
      //console.log(JSON.stringify(response, undefined, 2));
      if (error) {
        callback('Unable to coonect to Goolge servers.')
      } else if (body.status === 'ZERO_RESULTS') {
        callback('Unable to find that address.');
      } else if (body.status === 'OK') {
        callback(undefined, {
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            Longitude: body.results[0].geometry.location.lng
        });
      }
  });
};

module.exports = {geocodeAddress};
//module.exports.geocodeAddress = geocodeAddress;
